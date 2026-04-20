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
