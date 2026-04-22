# sessionFullContent.md

## 🌲 Full Project Structure

```bash
/home/sj/web/smt_project/aasouris_backend
├── bun.lock
├── ecosystem.config.js
├── http-client.env.json
├── logger
│   ├── error.json
│   └── log.json
├── package.json
├── prisma
│   ├── schema.prisma
│   └── seed.ts
├── README.md
├── src
│   ├── app
│   │   ├── figmafix.md
│   │   ├── interfaces
│   │   │   ├── common.ts
│   │   │   └── file.ts
│   │   ├── middlewares
│   │   │   ├── auth.ts
│   │   │   ├── entry.ts
│   │   │   ├── forgetAuth.ts
│   │   │   ├── globalErrorHandler.ts
│   │   │   ├── notFound.ts
│   │   │   ├── optionalAuth.ts
│   │   │   ├── parseBodyData.ts
│   │   │   ├── postman.ts
│   │   │   └── validateRequest.ts
│   │   ├── modules
│   │   │   ├── auth
│   │   │   │   ├── auth.api.http
│   │   │   │   ├── auth.api.json
│   │   │   │   ├── auth.controller.ts
│   │   │   │   ├── auth.routes.ts
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── auth.validation.ts
│   │   │   ├── notification
│   │   │   │   ├── notification.api.http
│   │   │   │   ├── notification.api.json
│   │   │   │   ├── notification.controller.ts
│   │   │   │   ├── notification.routes.ts
│   │   │   │   ├── notification.service.ts
│   │   │   │   └── notification.validation.ts
│   │   │   ├── session
│   │   │   │   ├── session.api.http
│   │   │   │   ├── session.controller.ts
│   │   │   │   ├── session.routes.ts
│   │   │   │   ├── session.service.ts
│   │   │   │   └── session.validation.ts
│   │   │   └── user
│   │   │       ├── user.api.http
│   │   │       ├── user.api.json
│   │   │       ├── user.controller.ts
│   │   │       ├── user.routes.ts
│   │   │       ├── user.service.ts
│   │   │       └── user.validation.ts
│   │   └── routes
│   │       └── index.ts
│   ├── app.ts
│   ├── config
│   │   ├── index.ts
│   │   ├── serviceAccount.ts
│   │   └── viewRoutes.ts
│   ├── errors
│   │   ├── ApiErrors.ts
│   │   ├── handleClientError.ts
│   │   ├── handleValidationError.ts
│   │   ├── handleZodError.ts
│   │   └── parsePrismaValidationError.ts
│   ├── helpers
│   │   ├── bcrypt.ts
│   │   ├── fileUploader.ts
│   │   ├── firebaseAdmin.ts
│   │   ├── generateOtp.ts
│   │   ├── jwtHelpers.ts
│   │   ├── onboardingHtml.ts
│   │   ├── sendEmail.ts
│   │   └── stripe.ts
│   ├── interfaces
│   │   ├── common.ts
│   │   ├── error.ts
│   │   ├── file.ts
│   │   ├── index.d.ts
│   │   └── paginations.ts
│   ├── jobs
│   │   ├── bullBoard.ts
│   │   ├── queues
│   │   │   ├── emailQueue.ts
│   │   │   └── notificationQueue.ts
│   │   └── workers
│   │       ├── emailWorker.ts
│   │       └── notificationWorker.ts
│   ├── server.ts
│   └── shared
│       ├── catchAsync.ts
│       ├── emailTemplate.ts
│       ├── logger.ts
│       ├── paginationHelper.ts
│       ├── pick.ts
│       ├── prisma.ts
│       ├── redis-services
│       │   └── otp.service.ts
│       ├── redis.ts
│       ├── searchFilter.ts
│       ├── sendResponse.ts
│       └── uploadInSpace.ts
├── tsconfig.json
└── vercel.json

22 directories, 86 files
```

## 📁 session Module Tree

```bash
/home/sj/web/smt_project/aasouris_backend/src/app/modules/session
├── session.api.http
├── session.controller.ts
├── session.routes.ts
├── session.service.ts
└── session.validation.ts

1 directory, 5 files
```

## 📋 schema.prisma

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model PendingUser {
  // id            String   @id @default(uuid(7)) @db.Uuid
  id String @id @default(auto()) @map("_id") @db.ObjectId

  email     String   @unique
  password  String
  role      UserRole
  fullName  String
  fcmToken  String?
  timeZone  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("pending_users")
}

model User {
  // id                    String            @id @default(uuid(7)) @db.Uuid
  id                    String         @id @default(auto()) @map("_id") @db.ObjectId
  email                 String?        @unique
  password              String?
  role                  UserRole
  fullName              String?
  timeZone              String?
  choosenHero           String?
  morningReminder       String?
  nightReminder         String?
  starEarned            Int            @default(0)
  fcmTokens             String[]
  createdAt             DateTime       @default(now())
  updatedAt             DateTime       @updatedAt
  lastLoginAt           DateTime       @default(now())
  profileImage          String?
  appleId               String?
  loginType             UserLoginType  @default(EMAIL_PASS)
  receivedNotifications Notification[] @relation("notificationRecieve")
  sentNotifications     Notification[] @relation("notificationSend")
  sessions              Session[]

  @@index([appleId])
  @@map("users")
}

enum UserRole {
  USER
  ADMIN
}

enum UserLoginType {
  GOOGLE
  APPLE
  EMAIL_PASS
}

model Notification {
  // id                  String              @id @default(uuid(7)) @db.Uuid
  id                  String              @id @default(auto()) @map("_id") @db.ObjectId
  title               String
  body                String?
  // receiverId          String?             @db.Uuid
  receiverId          String?             @db.ObjectId
  // senderId            String?             @db.Uuid
  senderId            String?             @db.ObjectId
  type                NotificationType
  isRead              Boolean             @default(false)
  notificationChannel NotificationChannel @default(BOTH)
  metaData            Json?
  createdAt           DateTime            @default(now())
  updatedAt           DateTime            @updatedAt
  receiver            User?               @relation("notificationRecieve", fields: [receiverId], references: [id], onDelete: Cascade)
  sender              User?               @relation("notificationSend", fields: [senderId], references: [id], onDelete: Cascade)

  @@index([isRead])
  @@map("notifications")
}

enum NotificationChannel {
  INAPP
  PUSH
  BOTH
}

enum NotificationType {
  SYSTEM
}

model Session {
  id        String      @id @default(auto()) @map("_id") @db.ObjectId
  type      SessionType
  userId    String      @db.ObjectId
  user      User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  dateKey   String
  createdAt DateTime    @default(now())
  updatedAt DateTime    @updatedAt

  @@unique([userId, dateKey, type])
  @@index([createdAt])
  @@map("sessions")
}

model level {
  id            String   @id @default(auto()) @map("_id") @db.ObjectId
  title         String
  requiredStars Int
  order         Int      @unique
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@map("levels")
}

enum SessionType {
  MORNING
  NIGHT
}
```

## 📦 package.json

```json
{
  "name": "dash_dash_backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node ./dist/server.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "concurrently \"tsx watch src/server.ts\" \"tsx watch src/jobs/workers/emailWorker.ts\" \"tsx watch src/jobs/workers/notificationWorker.ts\"",
    "build": "tsc"
  },
  "prisma": {
    "seed": "tsx prisma/seed.ts"
  },
  "keywords": [],
  "author": "Md. Shahjalal",
  "license": "ISC",
  "description": "dash_dash_backend",
  "devDependencies": {
    "@types/bcryptjs": "^2.4.6",
    "@types/cors": "^2.8.17",
    "@types/express": "^4.17.21",
    "@types/node": "^20.14.11",
    "@types/nodemailer": "^6.4.17",
    "concurrently": "^9.2.1",
    "prisma": "^6.3.0",
    "tsx": "^4.21.0",
    "typescript": "^5.5.3"
  },
  "dependencies": {
    "@aws-sdk/client-s3": "^3.782.0",
    "@aws-sdk/lib-storage": "^3.782.0",
    "@bull-board/express": "^6.15.0",
    "@prisma/client": "^6.3.0",
    "@types/jsonwebtoken": "^9.0.6",
    "@types/multer": "^1.4.11",
    "bcryptjs": "^2.4.3",
    "bullmq": "^5.66.1",
    "cors": "^2.8.5",
    "date-fns": "^4.1.0",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-basic-auth": "^1.2.1",
    "firebase-admin": "^13.2.0",
    "helmet": "^8.1.0",
    "http-status": "^1.7.4",
    "ioredis": "^5.8.2",
    "jsonwebtoken": "^9.0.2",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.16",
    "stripe": "^20.0.0",
    "winston": "^3.19.0",
    "zod": "^3.25.76"
  }
}
```

## 🔧 session.routes.ts

```ts
import { Router } from "express";
import auth from "../../middlewares/auth";
import { sessionController } from "./session.controller";
import validateRequest from "../../middlewares/validateRequest";
import { sessionValidation } from "./session.validation";

const router = Router();

router.use(auth());

router.post(
  "/create",
  validateRequest(sessionValidation.createSessionValidation),
  sessionController.createSession,
);

router.get("/all", sessionController.getAllSessions);

router.get("/weekly", sessionController.getWeeklySessions);

router.get("/weekly-count", sessionController.thisWeekTotal);

router.get("/analytic-stats", sessionController.getAnalyticStats);

router.get("/morning-vs-night", sessionController.getMorningVsNight);

router.get("/current-streak", sessionController.getCurrentStreak);

router.get("/star-count", sessionController.getStarCount);

export const sessionRoutes = router;
```

## 🎮 session.controller.ts

```ts
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { sessionService } from "./session.service";
import { pick } from "../../../shared/pick";
import { paginationOptions } from "../../../shared/paginationHelper";
import prisma from "../../../shared/prisma";
import { http } from "winston";

const createSession = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const result = await sessionService.createSession(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Session created successfully",
    data: result,
  });
});

const getAllSessions = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const paginations = pick(req.query, paginationOptions);

  const filter = pick(req.query, ["day", "month", "year"]);

  const result = await sessionService.getAllSessions(
    userId,
    paginations,
    filter,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All sessions retrieved successfully",
    data: result,
  });
});

const getWeeklySessions = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getWeeklySessions(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Weekly sessions retrieved successfully",
    data: result,
  });
});

const thisWeekTotal = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.thisWeekTotal(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "This week total retrieved successfully",
    data: result,
  });
});

const getAnalyticStats = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getAnalyticStats(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Analytics stats retrieved successfully",
    data: result,
  });
});

const getMorningVsNight = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getMorningVsNight(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Morning vs night stat retrieved successfully",
    data: result,
  });
});

const getCurrentStreak = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getCurrentStreak(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Current streak retrieved successfully",
    data: result,
  });
});

const getStarCount = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getStarCount(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Start count retrieved successfully",
    data: result,
  });
});

export const sessionController = {
  createSession,
  getAllSessions,
  getWeeklySessions,
  thisWeekTotal,
  getAnalyticStats,
  getMorningVsNight,
  getCurrentStreak,
  getStarCount,
};
```

## 🛠️ session.service.ts

```ts
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
  const dateKey = format(new Date(), "yyyy-MM-dd");

  try {
    return await prisma.$transaction(async (tx) => {
      const user = await tx.user.findUnique({
        where: { id: userId },
        select: { starEarned: true },
      });

      if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
      }

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

export const sessionService = {
  createSession,
  getAllSessions,
  getWeeklySessions,
  thisWeekTotal,
  getAnalyticStats,
  getMorningVsNight,
  getCurrentStreak,
  getStarCount,
};
```

## 📝 session.validation.ts

```ts
import { SessionType } from "@prisma/client";
import z from "zod";

const createSessionValidation = z
  .object({
    type: z.nativeEnum(SessionType),
  })
  .strict();

export type TCreateSession = z.infer<typeof createSessionValidation>;

export const sessionValidation = {
  createSessionValidation,
};
```
