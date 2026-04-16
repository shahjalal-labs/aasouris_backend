import httpStatus from "http-status";
import {
  TAppleLoginSchema,
  TChangePasswordSchema,
  TGoogleLoginSchema,
  TLoginUserSchema,
  TResetPasswordSchema,
  TUpdateProfileSchema,
  TVerifyForgotPasswordOtpSchema,
} from "./auth.validation";
import { UserLoginType, UserRole } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../errors/ApiErrors";
import { hashPassword, isPasswordValid } from "../../../helpers/bcrypt";
import { jwtHelpers } from "../../../helpers/jwtHelpers";
import { uploadInSpace } from "../../../shared/uploadInSpace";
import { emailQueue } from "../../../jobs/queues/emailQueue";
import { generateOTP } from "../../../helpers/generateOtp";
import { redisOtpService } from "../../../shared/redis-services/otp.service";

//w: (start)╭──────────── loginUser ────────────╮
const loginUser = async (payload: TLoginUserSchema) => {
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user)
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "User not found, please create account first",
    );

  //password validity checking
  if (!(await isPasswordValid(payload.password, user.password as string)))
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid credential");

  const accessToken = jwtHelpers.generateToken({
    id: user.id,
    role: user.role,
  });

  // Ensure fcmTokens is always an array
  let fcmTokens: string[] = user.fcmTokens ?? [];

  // Add token only if it doesn't already exist
  if (payload.fcmToken && !fcmTokens.includes(payload.fcmToken)) {
    fcmTokens.push(payload.fcmToken);
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      lastLoginAt: new Date(),
      fcmTokens,
    },
  });

  return {
    userId: user.id,
    role: user.role,
    accessToken,
    loginType: user.loginType,
    ...(user.role === "SELLER" && {
      isSellerProfileComplete: false, // here condition will apply,
    }),
  };
};
//w: (end)  ╰──────────── loginUser ────────────╯

//w: (start)╭──────────── googleLogin ────────────╮
const googleLogin = async (payload: TGoogleLoginSchema) => {
  let user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (user) {
    // Ensure fcmTokens is always an array
    let fcmTokens: string[] = user.fcmTokens ?? [];

    // Add token only if it doesn't already exist
    if (payload.fcmToken && !fcmTokens.includes(payload.fcmToken)) {
      fcmTokens.push(payload.fcmToken);
    }

    // Update lastLoginAt and fcmTokens
    user = await prisma.user.update({
      where: { email: payload.email },
      data: {
        lastLoginAt: new Date(),
        fcmTokens: fcmTokens, // array without duplicates
      },
    });
  } else {
    user = await prisma.user.create({
      data: {
        fullName: payload.fullname,
        email: payload.email,
        role: UserRole.NOT_SET,
        loginType: UserLoginType.GOOGLE,
        ...(payload.fcmToken
          ? {
              fcmTokens: [payload.fcmToken],
            }
          : {}),
      },
    });
  }

  const accessToken = jwtHelpers.generateToken({
    id: user.id,
    role: user.role,
  });
  return {
    userId: user.id,
    role: user.role,
    accessToken,
    loginType: user.loginType,
    ...(user.role === "SELLER" && {
      isSellerProfileComplete: false, // here condition will apply,
    }),
  };
};
//w: (end)  ╰──────────── googleLogin ────────────╯

//w: (start)╭──────────── appleLogin ────────────╮
const appleLogin = async (payload: TAppleLoginSchema) => {
  let user = await prisma.user.findFirst({
    where: {
      appleId: payload.appleId,
    },
  });

  if (user) {
    // Ensure fcmTokens is always an array
    let fcmTokens: string[] = user.fcmTokens ?? [];

    // Add token only if it doesn't already exist
    if (payload.fcmToken && !fcmTokens.includes(payload.fcmToken)) {
      fcmTokens.push(payload.fcmToken);
    }

    // Update lastLoginAt and fcmTokens
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        lastLoginAt: new Date(),
        fcmTokens: fcmTokens, // array without duplicates
      },
    });
  } else {
    user = await prisma.user.create({
      data: {
        fullName: payload.fullname,
        email: payload.email,
        ...(payload.fcmToken
          ? {
              fcmTokens: [payload.fcmToken],
            }
          : {}),
        role: UserRole.NOT_SET,
        loginType: UserLoginType.APPLE,
        appleId: payload.appleId,
      },
    });
  }

  const accessToken = jwtHelpers.generateToken({
    id: user.id,
    role: user.role,
  });
  return {
    userId: user.id,
    role: user.role,
    accessToken,
    loginType: user.loginType,
    ...(user.role === "SELLER" && {
      isSellerProfileComplete: false, // here condition will apply,
    }),
  };
};
//w: (end)  ╰──────────── appleLogin ────────────╯

//w: (start)╭──────────── fetchMyProfile ────────────╮
const fetchMyProfile = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      email: true,
      fullName: true,
      role: true,
      lastLoginAt: true,
      profileImage: true,
      loginType: true,
      createdAt: true,
    },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found.");

  return user;
};
//w: (end)  ╰──────────── fetchMyProfile ────────────╯

//w: (start)╭──────────── updateMyProfile ────────────╮
// added user stripe account

const updateProfile = async (
  userId: string,
  payload: TUpdateProfileSchema,
  files?: {
    profileimage?: Express.Multer.File[];
    shopimage?: Express.Multer.File[];
  },
) => {
  // Fetch current user info
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, role: true, email: true },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  if (user.role !== "NOT_SET" && payload.role)
    throw new ApiError(httpStatus.BAD_REQUEST, "You can set role only once");

  // Prepare file URLs before transaction
  if (files?.profileimage?.length) {
    const profileUrl = await uploadInSpace(files.profileimage[0], "profile");
    payload.profileimage = profileUrl;
  }

  if (files?.shopimage?.length) {
    const shopUrl = await uploadInSpace(files.shopimage[0], "shop");
    payload.shopimage = shopUrl;
  }

  // Update user with payload
  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: payload,
    select: {
      id: true,
      fullName: true,
    },
  });

  return updatedUser;
};
//w: (end)  ╰──────────── updateMyProfile ────────────╯

//w: (start)╭──────────── changePassword ────────────╮
const changePassword = async (
  userId: string,
  payload: TChangePasswordSchema,
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) throw new ApiError(httpStatus.BAD_REQUEST, "User not found");

  // if user social login don't access to change password
  if (!user.password || user.loginType !== "EMAIL_PASS")
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "can't change password for social login",
    );

  if (!(await isPasswordValid(payload.oldPassword, user.password!)))
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid password");

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: await hashPassword(payload.newPassword),
    },
  });

  await emailQueue.add(
    "changePassword",
    {
      fullName: user.fullName,
      email: user.email,
    },
    {
      attempts: 3,
      backoff: {
        // retry delay = baseDelay * 2^(n - 1), n = retry attempt
        type: "exponential",
        delay: 1000, // in ms
      },
      removeOnComplete: {
        age: 3600 * 2, //2h in second
      },
    },
  );
};
//w: (end)  ╰──────────── changePassword ────────────╯

//w: (start)╭──────────── sendForgotPassOtp ────────────╮
const sendForgotPassOtp = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) throw new ApiError(httpStatus.NOT_FOUND, "User not found");

  const otp = generateOTP();
  await redisOtpService.storeOtp(email, otp);
  await emailQueue.add(
    "sendForgotPassOtp",
    {
      email: email,
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

  return otp;
};
//w: (end)  ╰──────────── sendForgotPassOtp ────────────╯

//w: (start)╭──────────── verifyForgotPasswordOtp ────────────╮
const verifyForgotPasswordOtp = async (
  payload: TVerifyForgotPasswordOtpSchema,
) => {
  const { email, otp } = payload;

  const user = await prisma.user.findUnique({ where: { email: email } });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  const userId = user.id;

  await redisOtpService.verifyOtp(email, otp);

  const forgetToken = jwtHelpers.generateToken({ id: userId, email });

  return { forgetToken };
};
//w: (end)  ╰──────────── verifyForgotPasswordOtp ────────────╯

//w: (start)╭──────────── resetPassword ────────────╮
const resetPassword = async (
  payload: TResetPasswordSchema & { email: string },
) => {
  await prisma.user.update({
    where: {
      email: payload.email,
    },
    data: {
      password: await hashPassword(payload.newPassword),
    },
  });

  await emailQueue.add(
    "changePassword",
    {
      email: payload.email,
    },
    {
      attempts: 3,
      backoff: {
        // retry delay = baseDelay * 2^(n - 1), n = retry attempt
        type: "exponential",
        delay: 1000, // in ms
      },
      removeOnComplete: {
        age: 3600 * 2, //2h in second
      },
    },
  );
};
//w: (end)  ╰──────────── resetPassword ────────────╯

export const authService = {
  loginUser,
  googleLogin,
  appleLogin,
  fetchMyProfile,
  updateProfile,
  changePassword,
  sendForgotPassOtp,
  verifyForgotPasswordOtp,
  resetPassword,
};
