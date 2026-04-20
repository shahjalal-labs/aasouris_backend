import { UserRole } from "@prisma/client";
import { z } from "zod";
import { timeZoneSchema } from "../user/user.validation";

//w: (start)╭──────────── loginUser ────────────╮
const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  fcmToken: z.string().optional(),
});

export type TLoginUserSchema = z.infer<typeof loginUserSchema>;

//w: (end)  ╰──────────── loginUser ────────────╯

//w: (start)╭──────────── googleLogin ────────────╮
const googleLoginSchema = z
  .object({
    fullname: z.string(),
    email: z.string().email(),
    fcmToken: z.string().optional(),
  })
  .strict();

export type TGoogleLoginSchema = z.infer<typeof googleLoginSchema>;
//w: (end)  ╰──────────── googleLogin ────────────╯

//w: (start)╭──────────── appleLogin ────────────╮
const appleLoginSchema = z
  .object({
    appleId: z.string(),
    fullname: z.string().optional(),
    email: z.string().email().optional(),
    fcmToken: z.string().optional(),
  })
  .strict();

export type TAppleLoginSchema = z.infer<typeof appleLoginSchema>;
//w: (end)  ╰──────────── appleLogin ────────────╯

//w: (start)╭──────────── changePassword ────────────╮
const changePasswordSchema = z
  .object({
    oldPassword: z
      .string()
      .min(8, "Invalid password")
      .max(64, "Invalid password")
      .regex(/[A-Z]/, "Invalid password")
      .regex(/[a-z]/, "Invalid password")
      .regex(/[0-9]/, "Invalid password")
      .regex(/[@$!%*?&#^()_\-+=\[\]{};:'",.<>\/\\|]/, "Invalid password")
      .regex(/^\S+$/, "Invalid password"),

    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(64, "Password must be at most 64 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&#^()_\-+=\[\]{};:'",.<>\/\\|]/,
        "Password must contain at least one special character",
      )
      .regex(/^\S+$/, "Password must not contain spaces"),
  })

  .strict();

export type TChangePasswordSchema = z.infer<typeof changePasswordSchema>;

//w: (end)  ╰──────────── changePassword ────────────╯

//w: (start)╭──────────── sendForgotPassOtp ────────────╮
const sendForgotPassOtpSchema = z
  .object({
    email: z.string().email(),
  })
  .strict();

export type TSendForgotPassOtpSchema = z.infer<typeof sendForgotPassOtpSchema>;

//w: (end)  ╰──────────── sendForgotPassOtp ────────────╯

//w: (start)╭──────────── resetPassword ────────────╮
const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(64, "Password must be at most 64 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&#^()_\-+=\[\]{};:'",.<>\/\\|]/,
        "Password must contain at least one special character",
      )
      .regex(/^\S+$/, "Password must not contain spaces"),
  })
  .strict();

export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;

//w: (end)  ╰──────────── resetPassword ────────────╯

//w: (start)╭──────────── verifyForgotPasswordOtp ────────────╮
const verifyForgotPasswordOtpSchema = z
  .object({
    email: z.string().email(),
    otp: z.string().min(4),
  })
  .strict();

export type TVerifyForgotPasswordOtpSchema = z.infer<
  typeof verifyForgotPasswordOtpSchema
>;

//w: (end)  ╰──────────── verifyForgotPasswordOtp ────────────╯

//w: (start)╭──────────── updateProfile ────────────╮

const timeOnlySchema = z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
  message: "Time must be in HH:mm format (e.g. 08:00/14:33)",
});

const updateProfileSchema = z
  .object({
    role: z.nativeEnum(UserRole),
    fullName: z.string().min(2).max(30),
    timeZone: timeZoneSchema,
    choosenHero: z.string().trim().min(2).max(100),
    morningReminder: timeOnlySchema,
    nightReminder: timeOnlySchema,
  })
  .strict()
  .partial()
  .superRefine((val, ctx) => {
    if (val.role === "ADMIN") {
      ctx.addIssue({
        code: "custom",
        message: "Can't change role to ADMIN",
      });
    }

    if (!Object.keys(val).length) {
      ctx.addIssue({
        code: "custom",
        message: "No field given for update",
      });
    }
  });

export type TUpdateProfileSchema = z.infer<typeof updateProfileSchema>;

//w: (end)  ╰──────────── updateProfile ────────────╯

export const authValidation = {
  loginUserSchema,
  googleLoginSchema,
  appleLoginSchema,
  changePasswordSchema,
  sendForgotPassOtpSchema,
  verifyForgotPasswordOtpSchema,
  resetPasswordSchema,
  updateProfileSchema,
};
