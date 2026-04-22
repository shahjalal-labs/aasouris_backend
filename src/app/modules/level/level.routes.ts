import { Router } from "express";
import auth from "../../middlewares/auth";
import { levelController } from "./level.controller";

const router = Router();

router.get("/all-level", auth(), levelController.getAllLevels);

router.get("/current-level", auth(), levelController.getCurrentLevel);

export const levelRoutes = router;
