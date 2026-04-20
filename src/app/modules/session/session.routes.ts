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
