import express, { Application } from "express";
import cors from "cors";
import path from "path";
import basicAuth from "express-basic-auth";
import helmet from "helmet";
import { logger } from "./shared/logger";
import { entryMessage } from "./app/middlewares/entry";
import { router } from "./app/routes";
import { configRoutes } from "./config/viewRoutes";
import { bullBoardRouter } from "./jobs/bullBoard";
import GlobalErrorHandler from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";
const app: Application = express();
app.use(helmet());
app.use(cors());

// Important: raw body for stripe signature
/* app.post(
  "/api/v1/webhook/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhook,
); */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

//logger
app.use((req, _res, next) => {
  if (req.originalUrl === "/api/v1/webhook/stripe") {
    return next();
  }

  logger.info(`Received ${req.method} request to ${req.url} from ${req.ip}`);

  if (req.body && Object.keys(req.body).length) {
    logger.info("Request body: %s", req.body);
  }

  next();
});

// Route handler for root endpoint
app.get("/", entryMessage);

// Router setup
app.use("/api/v1", router);

//privacy policy, terms of service etc route
app.use("/", configRoutes);
app.use("/api/v1", configRoutes);

app.use(
  "/bull",
  basicAuth({
    users: {
      admin: process.env.BULLBOARD_PASSWORD || "admin",
    },
    challenge: true,
  }),
  bullBoardRouter,
);

// app.use("/bull", bullBoardRouter); // No auth

// Global Error Handler
app.use(GlobalErrorHandler);

// not found handler
app.use(notFound);

export default app;
