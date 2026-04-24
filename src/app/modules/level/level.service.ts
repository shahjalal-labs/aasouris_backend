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

// Helper: check if a session was created within 30 min of its reminder time
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
  // 1. Fetch user data
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      timeZone: true,
      morningReminder: true,
      nightReminder: true,
      starEarned: true,
    },
  });
  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  const tz = user.timeZone || "UTC";

  // 2. Current streak (reuse existing service logic)
  const { currentStreak } = await sessionService.getCurrentStreak(userId);

  // 3. Basic session counts
  const [totalSessions, morningCount, nightCount] = await Promise.all([
    prisma.session.count({ where: { userId } }),
    prisma.session.count({ where: { userId, type: "MORNING" } }),
    prisma.session.count({ where: { userId, type: "NIGHT" } }),
  ]);

  // 4. Bronze badges
  const firstBrush = totalSessions > 0;
  const threeDayStreak = currentStreak >= 3;

  // Cavity Fighter – at least one day with both morning & night sessions
  const dualDays = await prisma.session.groupBy({
    by: ["dateKey"],
    where: { userId },
    _count: { type: true },
    having: { type: { _count: { gte: 2 } } },
  });
  const cavityFighter = dualDays.length > 0;

  // On Time – any session within 30 min of its reminder
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

  // 5. Silver badges
  const sevenDayStreak = currentStreak >= 7;
  const morningHero = morningCount >= 7;
  const nightChampion = nightCount >= 7;
  const perfectWeek = currentStreak >= 7; // same as 7-day streak per your instruction

  // 6. Gold badges
  const thirtyDayStreak = currentStreak >= 30;
  const masterBrusher = totalSessions >= 30;
  const legend = totalSessions >= 100;
  const superStar = (user.starEarned ?? 0) >= 500;

  // 7. Compose the response object
  const bronzeBadges = [
    { name: "First Brush", unlocked: firstBrush },
    { name: "3-Day Streak", unlocked: threeDayStreak },
    { name: "Cavity Fighter", unlocked: cavityFighter },
    { name: "On Time", unlocked: onTime },
  ];

  const silverBadges = [
    { name: "7-Day Streak", unlocked: sevenDayStreak },
    { name: "Morning Hero", unlocked: morningHero },
    { name: "Night Champion", unlocked: nightChampion },
    { name: "Perfect Week", unlocked: perfectWeek },
  ];

  const goldBadges = [
    { name: "30-Day Streak", unlocked: thirtyDayStreak },
    { name: "Master Brusher", unlocked: masterBrusher },
    { name: "Legend", unlocked: legend },
    { name: "Super Star", unlocked: superStar },
  ];

  // 8. Determine reward_badge (highest tier fully unlocked)
  const isGoldComplete = goldBadges.every((b) => b.unlocked);
  const isSilverComplete = silverBadges.every((b) => b.unlocked);
  const isBronzeComplete = bronzeBadges.every((b) => b.unlocked);

  let earnedBadge: "gold" | "silver" | "bronze" | null = null;
  if (isGoldComplete) earnedBadge = "gold";
  else if (isSilverComplete) earnedBadge = "silver";
  else if (isBronzeComplete) earnedBadge = "bronze";
  else earnedBadge = null;

  return {
    bronze: bronzeBadges,
    silver: silverBadges,
    gold: goldBadges,
    earnedBadge,
  };
};
export const levelService = {
  getAllLevels,
  getCurrentLevel,
  getBadges,
};
