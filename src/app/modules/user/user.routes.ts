import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import { userController } from "./user.controller";
const router = Router();

router.post(
  "/create",
  validateRequest(userValidation.createUserSchema),
  userController.createPendingUser,
);

router.post(
  "/verify",
  validateRequest(userValidation.verifyUserSchema),
  userController.verifyUser,
);

router.get("/all", userController.getAllUser);

router.get("/:id", userController.getUserDetails);

export const userRoutes = router;
