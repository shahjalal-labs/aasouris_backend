import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import { logger } from "../../../shared/logger";
import prisma from "../../../shared/prisma";
import { TCreateSession } from "./session.validation";
import {
  differenceInDays,
  endOfDay,
  endOfMonth,
  endOfWeek,
  endOfYear,
  format,
  startOfDay,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
} from "date-fns";
import { paginationHelper, TOptions } from "../../../shared/paginationHelper";
import { Prisma, SessionType } from "@prisma/client";

const createSession = async (userId: string, payload: TCreateSession) => {
  const now = new Date();
  const dateKey = format(now, "yyyy-MM-dd");

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true },
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  try {
    const newSession = await prisma.session.create({
      data: {
        ...payload,
        userId,
        dateKey,
      },
      select: {
        id: true,
        type: true,
      },
    });

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        starEarned: {
          increment: 10,
        },
      },
    });

    return newSession;
  } catch (err: any) {
    if (err.code === "P2002") {
      throw new ApiError(httpStatus.CONFLICT, "Session already exists");
    }
    throw err;
  }
};

const getAllSessions = async (
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
        createdAt: true,
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

const getWeeklySessions = async (userId: string) => {
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
};

const thisWeekTotal = async (userId: string) => {
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
};

const getAnalyticStats = async (userId: string) => {
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
};

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

const getCurrentStreak = async (userId: string) => {
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

  // Build day map
  const dayMap = new Map<string, { morning: boolean; night: boolean }>();

  for (const g of grouped) {
    if (!dayMap.has(g.dateKey)) {
      dayMap.set(g.dateKey, { morning: false, night: false });
    }

    const day = dayMap.get(g.dateKey)!;

    if (g.type === SessionType.MORNING) day.morning = true;
    else if (g.type === SessionType.NIGHT) day.night = true;
  }

  let streak = 0;

  const todayKey = format(new Date(), "yyyy-MM-dd");

  //  Step 1: handle today separately
  const today = dayMap.get(todayKey);

  let currentDate: Date;

  if (today && today.morning && today.night) {
    // today is complete → include in streak
    streak = 1;
    currentDate = subDays(new Date(), 1);
  } else {
    // today incomplete → ignore it
    currentDate = subDays(new Date(), 1);
  }

  //  Step 2: strict check from yesterday backwards
  for (let i = 0; i < 365; i++) {
    const dateKey = format(currentDate, "yyyy-MM-dd");

    const day = dayMap.get(dateKey);

    if (!day || !day.morning || !day.night) {
      break;
    }

    streak++;

    currentDate.setDate(currentDate.getDate() - 1);
  }

  return {
    currentStreak: streak,
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
};
