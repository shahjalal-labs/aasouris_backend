import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";
import { formatInTimeZone } from "date-fns-tz";
import { sessionService } from "../session/session.service";

const getAllLevels = async () => {
  return await prisma.level.findMany({
    orderBy: {
      order: "asc",
    },
    omit: {
      createdAt: true,
      updatedAt: true,
    },
  });
};

const getCurrentLevel = async (userId: string) => {
  return await prisma.$transaction(async (tx) => {
    const user = await tx.user.findUnique({
      where: { id: userId },
      select: { starEarned: true },
    });

    if (!user) {
      throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }

    // current level
    const currentLevel = await tx.level.findFirst({
      where: {
        requiredStars: {
          lte: user.starEarned,
        },
      },
      orderBy: {
        requiredStars: "desc",
      },
      select: {
        id: true,
        title: true,
        requiredStars: true,
        order: true,
      },
    });

    // next level
    const nextLevel = await tx.level.findFirst({
      where: {
        requiredStars: {
          gt: user.starEarned,
        },
      },
      orderBy: {
        requiredStars: "asc",
      },
      select: {
        id: true,
        title: true,
        requiredStars: true,
        order: true,
      },
    });

    return {
      starEarned: user.starEarned,

      currentLevel: currentLevel ?? null,

      nextLevel: nextLevel
        ? {
            id: nextLevel.id,
            name: nextLevel.title,
            requiredStars: nextLevel.requiredStars,
            order: nextLevel.order,
          }
        : null,
    };
  });
};

const isWithin30Min = (
  sessionCreatedAt: Date,
  reminderTime: string, // "HH:mm"
  userTimeZone: string,
): boolean => {
  const localTime = formatInTimeZone(sessionCreatedAt, userTimeZone, "HH:mm");
  const [h1, m1] = localTime.split(":").map(Number);
  const [h2, m2] = reminderTime.split(":").map(Number);
  const diff = Math.abs(h1 * 60 + m1 - (h2 * 60 + m2));
  return diff <= 30;
};

const getBadges = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      timeZone: true,
      morningReminder: true,
      nightReminder: true,
    },
  });
  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  const tz = user.timeZone || "UTC";

  // 1. Current streak (reuse existing service method)
  const { currentStreak } = await sessionService.getCurrentStreak(userId);

  // 2. First Brush – any session exists
  const totalSessions = await prisma.session.count({ where: { userId } });
  const firstBrush = totalSessions > 0;

  // 3. On Time – check up to last 100 sessions (reasonable limit)
  const recentSessions = await prisma.session.findMany({
    where: { userId },
    select: { type: true, createdAt: true },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  let onTime = false;
  for (const s of recentSessions) {
    if (s.type === "MORNING" && user.morningReminder) {
      if (isWithin30Min(s.createdAt, user.morningReminder, tz)) {
        onTime = true;
        break;
      }
    }
    if (s.type === "NIGHT" && user.nightReminder) {
      if (isWithin30Min(s.createdAt, user.nightReminder, tz)) {
        onTime = true;
        break;
      }
    }
  }

  // 4. Morning Hero & Night Champion (≥ 7 sessions of that type)
  const [morningCount, nightCount] = await Promise.all([
    prisma.session.count({ where: { userId, type: "MORNING" } }),
    prisma.session.count({ where: { userId, type: "NIGHT" } }),
  ]);

  const morningHero = morningCount >= 7;
  const nightChampion = nightCount >= 7;

  // 5. Perfect Week – current streak ≥ 7 days
  const perfectWeek = currentStreak >= 7;

  return {
    first_brush: firstBrush,
    current_streak: currentStreak,
    on_time: onTime,
    morning_hero: morningHero,
    night_champion: nightChampion,
    perfect_week: perfectWeek,
  };
};

export const levelService = {
  getAllLevels,
  getCurrentLevel,
  getBadges,
};
