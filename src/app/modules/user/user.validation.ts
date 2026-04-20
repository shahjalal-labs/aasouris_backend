import { UserRole } from "@prisma/client";
import { z } from "zod";

export const timeZoneSchema = z.string().refine(
  (tz) => {
    try {
      Intl.DateTimeFormat(undefined, { timeZone: tz });
      return true;
    } catch {
      return false;
    }
  },
  {
    message: "Invalid timezone",
  },
);

//w: (start)╭──────────── createUser ────────────╮
const createUserSchema = z
  .object({
    email: z.string().email(),
    password: z
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

    role: z.nativeEnum(UserRole).default("USER"),
    fullName: z.string().min(2),
    fcmToken: z.string(),
    timeZone: timeZoneSchema,
  })
  .strict();

export type TCreateUserSchema = z.infer<typeof createUserSchema>;

//w: (end)  ╰──────────── createUser ────────────╯

//w: (start)╭──────────── verifyUser ────────────╮
const verifyUserSchema = z
  .object({
    email: z.string().email(),
    otp: z.string(),
  })
  .strict();
//w: (end)  ╰──────────── verifyUser ────────────╯

export const userValidation = {
  createUserSchema,
  verifyUserSchema,
};
