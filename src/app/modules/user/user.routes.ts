import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { userValidation } from "./user.validation";
import { userController } from "./user.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
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

router.get("/all", auth(UserRole.ADMIN), userController.getAllUser);

router.get("/:id", auth(), userController.getUserDetails);


export const userRoutes = router;
