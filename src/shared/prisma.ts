import { PrismaClient } from "@prisma/client";
import { logger } from "./logger";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("error", (e) => {
  logger.info("prisma error:", e);
});

/* prisma.$on("query", (e) => {
  logger.info("prisma query: %s", e);
}); */

export default prisma;
