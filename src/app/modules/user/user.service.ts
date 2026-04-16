import httpStatus from "http-status";
import { UserLoginType } from "@prisma/client";
import { TCreateUserSchema } from "./user.validation";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import { hashPassword } from "../../../helpers/bcrypt";
import { generateOTP } from "../../../helpers/generateOtp";
import { redisOtpService } from "../../../shared/redis-services/otp.service";
import { emailQueue } from "../../../jobs/queues/emailQueue";
import { jwtHelpers } from "../../../helpers/jwtHelpers";

//w: (start)╭──────────── createPendingUser ────────────╮
const createPendingUser = async (payload: TCreateUserSchema) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (user) throw new ApiError(httpStatus.BAD_REQUEST, "User already exist");

  const { password, ...rest } = payload;

  const result = await prisma.pendingUser.upsert({
    where: {
      email: payload.email,
    },
    update: {
      ...rest,
      password: await hashPassword(password),
    },
    create: {
      ...rest,
      password: await hashPassword(password),
    },
  });

  const otp = generateOTP();
  await redisOtpService.storeOtp(payload.email, otp);
  await emailQueue.add(
    "accountVerify",
    {
      email: payload.email,
      fullname: payload.fullName,
      otp,
    },
    {
      attempts: 3,
      backoff: {
        // retry delay = baseDelay * 2^(n - 1), n = retry attempt
        type: "fixed",
        delay: 1000, // in ms
      },
      removeOnComplete: {
        age: 3600 * 2, //2h in second
      },
    },
  );

  return {
    email: result.email,
    otp,
  };
};
//w: (end)  ╰──────────── createPendingUser ────────────╯

//w: (start)╭──────────── verifyPendingUser ────────────╮
const verifyPendingUser = async (email: string, otp: string) => {
  await redisOtpService.verifyOtp(email, otp);

  const pendingUser = await prisma.pendingUser.findUnique({
    where: {
      email,
    },
  });

  if (!pendingUser)
    throw new ApiError(httpStatus.NOT_FOUND, "Pending user not found");

  const { id, fcmToken, createdAt, updatedAt, ...rest } = pendingUser;

  const verifiedUser = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        ...rest,
        ...(fcmToken ? { fcmTokens: [fcmToken] } : {}),

        loginType: UserLoginType.EMAIL_PASS,
      },
    });

    await tx.pendingUser.delete({
      where: {
        email,
      },
    });

    return user;
  });

  await redisOtpService.deleteOtp(email);

  const accessToken = jwtHelpers.generateToken({
    id: verifiedUser.id,
    role: verifiedUser.role,
  });

  return {
    userId: verifiedUser.id,
    role: verifiedUser.role,
    accessToken,
    loginType: verifiedUser.loginType,
  };
};
//w: (end)  ╰──────────── verifyPendingUser ────────────╯

//w: (start)╭──────────── getAllUser ────────────╮
const getAllUser = async () => {
  return await prisma.user.findMany();
};
//w: (end)  ╰──────────── getAllUser ────────────╯

//w: (start)╭──────────── getUserDetails ────────────╮
const getUserDetails = async (userId: string) => {
  const [result] = await Promise.all([
    prisma.user.findUnique({
      where: {
        id: userId,
      },

      select: {
        id: true,
        email: true,
        role: true,
        fullName: true,
        lastLoginAt: true,
        profileImage: true,
      },
    }),
  ]);

  if (!result) throw new ApiError(httpStatus.NOT_FOUND, "User/Shop not found");
  return result;
};
//w: (end)  ╰──────────── getUserDetails ────────────╯

export const userService = {
  createPendingUser,
  verifyPendingUser,
  getAllUser,
  getUserDetails,
};
