import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";
import { TCreateSession } from "./session.validation";
import {
  addDays,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  startOfWeek,
  subDays,
  subWeeks,
} from "date-fns";

import { formatInTimeZone, toDate } from "date-fns-tz";

import { paginationHelper, TOptions } from "../../../shared/paginationHelper";
import { Prisma, SessionType } from "@prisma/client";

const createSession = async (userId: string, payload: TCreateSession) => {
  // const dateKey = format(new Date(), "yyyy-MM-dd");

  try {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
        select: { starEarned: true, timeZone: true },
      });

      if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
      }

      const dateKey = formatInTimeZone(
        new Date(),
        user.timeZone || "UTC",
        "yyyy-MM-dd",
      );

      const session = await tx.session.create({
        data: { ...payload, userId, dateKey },
        select: { id: true, type: true },
      });

      const newStar = (user.starEarned ?? 0) + 10;

      await tx.user.update({
        where: { id: userId },
        data: {
          starEarned: newStar,
        },
        select: {
          id: true,
          starEarned: true,
        },
      });

      return session;
    });
  } catch (err: any) {
    if (err.code === "P2002") {
      throw new ApiError(httpStatus.CONFLICT, "Session already exists");
    }
    throw err;
  }
};

// break on timezone issue
/* const getAllSessions = async (
  userId: string,
  paginations: TOptions,
  filter?: {
    day?: string; // "2026-04-16"
    month?: string; // "2026-04"
    year?: string; // "2026"
  },
) => {
  const { page, limit, skip } =
    paginationHelper.calcalutePagination(paginations);

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
    },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  const whereClause: Prisma.SessionWhereInput = {
    userId,
  };

  const andClause: Prisma.SessionWhereInput[] = [];

  if (filter?.day) {
    const date = new Date(filter.day);
    andClause.push({
      createdAt: {
        gte: startOfDay(date),
        lte: endOfDay(date),
      },
    });
  }

  if (filter?.month) {
    const date = new Date(filter.month);

    andClause.push({
      createdAt: {
        gte: startOfMonth(date),
        lte: endOfMonth(date),
      },
    });
  }

  if (filter?.year) {
    const date = new Date(filter.year);

    andClause.push({
      createdAt: {
        gte: startOfYear(date),
        lte: endOfYear(date),
      },
    });
  }

  if (andClause.length) whereClause.AND = andClause;

  const [sessions, total] = await Promise.all([
    prisma.session.findMany({
      where: whereClause,
      skip,
      take: limit,
      select: {
        id: true,
        type: true,
        // createdAt: true,
        dateKey: true,
      },
    }),

    prisma.session.count({
      where: whereClause,
    }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: sessions,
  };
}; */

const getAllSessions = async (
  userId: string,
  paginations: TOptions,
  filter?: {
    day?: string;
    month?: string;
    year?: string;
  },
) => {
  const { page, limit, skip } =
    paginationHelper.calcalutePagination(paginations);

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  const whereClause: Prisma.SessionWhereInput = { userId };

  const andClause: Prisma.SessionWhereInput[] = [];

  // day filter
  if (filter?.day) {
    andClause.push({
      dateKey: filter.day, // "2026-04-16"
    });
  }

  // month filter
  if (filter?.month) {
    const start = new Date(`${filter.month}-01`);
    const end = endOfMonth(start);

    const startKey = format(start, "yyyy-MM-dd");
    const endKey = format(end, "yyyy-MM-dd");

    andClause.push({
      dateKey: {
        gte: startKey,
        lte: endKey,
      },
    });
  }

  // year filter
  if (filter?.year) {
    const start = new Date(`${filter.year}-01-01`);
    const end = endOfYear(start);

    const startKey = format(start, "yyyy-MM-dd");
    const endKey = format(end, "yyyy-MM-dd");

    andClause.push({
      dateKey: {
        gte: startKey,
        lte: endKey,
      },
    });
  }

  if (andClause.length) whereClause.AND = andClause;

  const [sessions, total] = await Promise.all([
    prisma.session.findMany({
      where: whereClause,
      skip,
      take: limit,
      select: {
        id: true,
        type: true,
        dateKey: true,
      },
      orderBy: {
        dateKey: "desc",
      },
    }),

    prisma.session.count({
      where: whereClause,
    }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: sessions,
  };
};

// timezone issue
/* const getWeeklySessions = async (userId: string) => {
  const userCount = await prisma.user.count({
    where: {
      id: userId,
    },
  });

  if (!userCount) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  const now = new Date();

  const result = await prisma.session.findMany({
    where: {
      userId,

      createdAt: {
        gte: startOfWeek(now, { weekStartsOn: 1 }),
        lte: endOfWeek(now, { weekStartsOn: 1 }),
      },
    },
    select: {
      id: true,
      type: true,
      createdAt: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  return result;
}; */

const getWeekKeys = (now: Date, timeZone: string) => {
  const start = startOfWeek(now, { weekStartsOn: 1 });

  return Array.from({ length: 7 }).map((_, i) =>
    formatInTimeZone(addDays(start, i), timeZone, "yyyy-MM-dd"),
  );
};

const getWeeklySessions = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { timeZone: true },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  const now = new Date();

  const weekKeys = getWeekKeys(now, user.timeZone || "UTC");

  const result = await prisma.session.findMany({
    where: {
      userId,
      dateKey: {
        in: weekKeys,
      },
    },
    select: {
      id: true,
      type: true,
      dateKey: true,
    },
    orderBy: {
      dateKey: "desc",
    },
  });

  return result;
};

// time zone  issue
/* const thisWeekTotal = async (userId: string) => {
  const now = new Date();

  const weeklySessionCount = await prisma.session.count({
    where: {
      userId,
      createdAt: {
        gte: startOfWeek(now, { weekStartsOn: 1 }),
        lte: endOfWeek(now, { weekStartsOn: 1 }),
      },
    },
  });

  return {
    weeklySessionCount,
  };
}; */

const thisWeekTotal = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { timeZone: true },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  const now = new Date();

  const weekKeys = getWeekKeys(now, user.timeZone || "UTC");

  const weeklySessionCount = await prisma.session.count({
    where: {
      userId,
      dateKey: {
        in: weekKeys,
      },
    },
  });

  return {
    weeklySessionCount,
  };
};

// timezone issue
/* const getAnalyticStats = async (userId: string) => {
  const userCount = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userCount) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  const now = new Date();

  const monthlySessionCount = await prisma.session.count({
    where: {
      userId,
      createdAt: {
        gte: startOfMonth(now),
        lte: endOfMonth(now),
      },
    },
  });

  const start = startOfMonth(now);

  // elapsed days (including today)
  const elapsedDays = differenceInDays(now, start) + 1;

  const elapsedWeeks = elapsedDays / 7;

  const avgPerWeek = Number((monthlySessionCount / elapsedWeeks).toFixed(2));

  return {
    monthlySessionCount,
    avgPerWeek,
  };
}; */

/* const getMorningVsNight = async (userId: string) => {
  const userExists = await prisma.user.count({
    where: {
      id: userId,
    },
  });

  if (!userExists) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  const [morningCount, nightCount] = await Promise.all([
    prisma.session.count({
      where: {
        userId,
        type: SessionType.MORNING,
      },
    }),

    prisma.session.count({
      where: {
        userId,
        type: SessionType.NIGHT,
      },
    }),
  ]);

  const totatCount = morningCount + nightCount;

  if (!totatCount) {
    return {
      morning: 0,
      night: 0,
    };
  }

  return {
    morning: Number(((morningCount / totatCount) * 100).toFixed(2)),
    night: 100 - Number(((morningCount / totatCount) * 100).toFixed(2)),
  };
}; */

const getMonthKeys = (yearMonth: string) => {
  const start = new Date(`${yearMonth}-01`);
  const end = endOfMonth(start);

  const keys: string[] = [];

  const current = new Date(start);

  while (current <= end) {
    keys.push(format(current, "yyyy-MM-dd"));
    current.setDate(current.getDate() + 1);
  }

  return keys;
};

const getAnalyticStats = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  const now = new Date();

  const monthKeys = getMonthKeys(format(now, "yyyy-MM"));

  const monthlySessionCount = await prisma.session.count({
    where: {
      userId,
      dateKey: {
        in: monthKeys,
      },
    },
  });

  const elapsedDays = monthKeys.length;

  const elapsedWeeks = elapsedDays / 7;

  const avgPerWeek = Number((monthlySessionCount / elapsedWeeks).toFixed(2));

  return {
    monthlySessionCount,
    avgPerWeek,
  };
};

const getMorningVsNight = async (userId: string) => {
  const grouped = await prisma.session.groupBy({
    by: ["type"],
    where: { userId },
    _count: {
      type: true,
    },
  });

  let morningCount: number = 0;
  let nightCount: number = 0;

  for (const g of grouped) {
    if (g.type === SessionType.MORNING) morningCount = g._count.type;
    else if (g.type === SessionType.NIGHT) nightCount = g._count.type;
  }

  const total = morningCount + nightCount;

  if (!total) {
    return {
      morning: 0,
      night: 0,
      counts: {
        morning: 0,
        night: 0,
        total: 0,
      },
    };
  }

  const morningPercentage = (morningCount / total) * 100;

  return {
    morning: Number(morningPercentage.toFixed(2)),
    night: Number((100 - morningPercentage).toFixed(2)),
    counts: {
      morning: morningCount,
      night: nightCount,
      total,
    },
  };
};

// fixed timezone issue

const getPreviousDateKey = (dateKey: string) => {
  const [year, month, day] = dateKey.split("-").map(Number);

  const d = new Date(Date.UTC(year, month - 1, day));
  d.setUTCDate(d.getUTCDate() - 1);

  return d.toISOString().slice(0, 10);
};

const getCurrentStreak = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { timeZone: true },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  // Get last 365 days of session data grouped by day + type
  const grouped = await prisma.session.groupBy({
    by: ["dateKey", "type"],
    where: {
      userId,
      createdAt: {
        gte: subDays(new Date(), 365),
      },
    },
    _count: {
      type: true,
    },
  });

  // Build map: dateKey -> { morning, night }
  const dayMap = new Map<string, { morning: boolean; night: boolean }>();

  for (const g of grouped) {
    if (!dayMap.has(g.dateKey)) {
      dayMap.set(g.dateKey, { morning: false, night: false });
    }

    const day = dayMap.get(g.dateKey)!;

    if (g.type === SessionType.MORNING) day.morning = true;
    if (g.type === SessionType.NIGHT) day.night = true;
  }

  // TODAY (timezone-safe)
  const todayKey = formatInTimeZone(
    new Date(),
    user.timeZone || "UTC",
    "yyyy-MM-dd",
  );

  let streak = 0;
  let currentKey = todayKey;

  // Step 1: check today
  const today = dayMap.get(currentKey);

  if (today && today.morning && today.night) {
    streak = 1;
    currentKey = getPreviousDateKey(currentKey);
  } else {
    currentKey = getPreviousDateKey(currentKey);
  }

  // Step 2: walk backwards using ONLY dateKey
  for (let i = 0; i < 365; i++) {
    const day = dayMap.get(currentKey);

    if (!day || !day.morning || !day.night) {
      break;
    }

    streak++;
    currentKey = getPreviousDateKey(currentKey);
  }

  return {
    currentStreak: streak,
  };
};

const getStarCount = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      starEarned: true,
      fullName: true,
    },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  return {
    starEarned: user.starEarned,
  };
};

const getWeekDateKeys = (weekStart: Date, timeZone: string): string[] => {
  return Array.from({ length: 7 }).map((_, i) =>
    formatInTimeZone(addDays(weekStart, i), timeZone, "yyyy-MM-dd"),
  );
};

const getStreakOverTime = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { timeZone: true },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  const timeZone = user.timeZone || "UTC";
  const now = new Date();
  const currentWeekStart = startOfWeek(now, { weekStartsOn: 1 });

  // Generate weeks from current (0 weeks back) to 4 weeks back
  const weekStarts: Date[] = [];
  for (let i = 0; i < 5; i++) {
    weekStarts.push(subWeeks(currentWeekStart, i)); // i=0 ➜ current, i=4 ➜ oldest
  }

  const results = await Promise.all(
    weekStarts.map(async (weekStart, index) => {
      const dateKeys = getWeekDateKeys(weekStart, timeZone);

      const count = await prisma.session.count({
        where: {
          userId,
          dateKey: { in: dateKeys },
        },
      });

      return {
        week: `Week ${index + 1}`, // Week 1 = current, Week 5 = oldest
        count,
      };
    }),
  );

  return results;
};

const getCurrentYearMonthlyCounts = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { timeZone: true },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  const timeZone = user.timeZone || "UTC";

  // Determine the user's current year
  const nowInUserTz = toDate(
    formatInTimeZone(new Date(), timeZone, "yyyy-MM-dd'T'HH:mm:ss"),
  );
  const userYear = parseInt(format(nowInUserTz, "yyyy"), 10); // e.g. 2026

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Build promises for each month
  const counts = await Promise.all(
    monthNames.map(async (monthLabel, index) => {
      const monthNumber = (index + 1).toString().padStart(2, "0"); // "01" to "12"
      const yearMonth = `${userYear}-${monthNumber}`; // "2026-01"

      const count = await prisma.session.count({
        where: {
          userId,
          dateKey: { startsWith: yearMonth }, // matches all days of the month
        },
      });

      return { month: monthLabel, count };
    }),
  );

  return counts;
};

const getInsights = async (userId: string) => {
  // 1. Fetch user timezone
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { timeZone: true },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  const timeZone = user.timeZone || "UTC";

  // 2. Generate dateKeys for the last 30 days (including today)
  const today = new Date();
  const dateKeys = Array.from({ length: 30 }, (_, i) => {
    const date = subDays(today, i); // i=0 → today, i=29 → 29 days ago
    return formatInTimeZone(date, timeZone, "yyyy-MM-dd");
  });

  // 3. Fetch all sessions within that period
  const sessions = await prisma.session.findMany({
    where: {
      userId,
      dateKey: { in: dateKeys },
    },
    select: { id: true, type: true, dateKey: true },
  });

  // 4. Count morning vs night
  let morningCount = 0;
  let nightCount = 0;

  for (const s of sessions) {
    if (s.type === "MORNING") morningCount++;
    else if (s.type === "NIGHT") nightCount++;
  }

  // consistency: morning wins on tie
  const consistency = morningCount >= nightCount ? "morning" : "night";

  // 5. Best day calculation
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Map a dateKey to a 0‑based index (Monday = 0, …, Sunday = 6)
  const toDayIndex = (dateKey: string): number => {
    const d = new Date(dateKey + "T00:00:00Z"); // treat as UTC
    return (d.getUTCDay() + 6) % 7; // Sunday(0) -> 6, Monday(1) -> 0
  };

  const sessionCountByDay = new Array(7).fill(0);
  const dayOccurrences = new Array(7).fill(0);

  // Count how many times each weekday appears in the 30‑day window
  for (const dk of dateKeys) {
    const idx = toDayIndex(dk);
    dayOccurrences[idx]++;
  }

  // Sum session counts per weekday
  for (const s of sessions) {
    const idx = toDayIndex(s.dateKey);
    sessionCountByDay[idx]++;
  }

  // Find the day with the highest average sessions per occurrence
  let bestDayIdx = 0;
  let maxAvg = -1;

  for (let i = 0; i < 7; i++) {
    const occ = dayOccurrences[i];
    if (occ === 0) continue;
    const avg = sessionCountByDay[i] / occ;
    if (avg > maxAvg) {
      maxAvg = avg;
      bestDayIdx = i;
    }
    // when avg is equal, we keep the earlier day (Monday first)
  }

  const bestDay = dayNames[bestDayIdx];

  return {
    consistency,
    bestDay,
    // optional statistics for debugging or richer UI
    /* stats: {
      morningCount,
      nightCount,
      dailyAverages: dayNames.map((name, idx) => ({
        day: name,
        average:
          dayOccurrences[idx] > 0
            ? parseFloat(
                (sessionCountByDay[idx] / dayOccurrences[idx]).toFixed(2),
              )
            : 0,
      })),
    }, */
  };
};

export const sessionService = {
  createSession,
  getAllSessions,
  getWeeklySessions,
  thisWeekTotal,
  getAnalyticStats,
  getMorningVsNight,
  getCurrentStreak,
  getStarCount,
  getStreakOverTime,
  getCurrentYearMonthlyCounts,
  getInsights,
};
