import httpStatus from "http-status";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";

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

export const levelService = {
  getAllLevels,
  getCurrentLevel,
};
