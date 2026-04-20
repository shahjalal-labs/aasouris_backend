import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import auth from "../../middlewares/auth";
import { authValidation } from "./auth.validation";
import { authController } from "./auth.controller";
import { fileUploader } from "../../../helpers/fileUploader";
import { parseBodyData } from "../../middlewares/parseBodyData";
import forgetAuth from "../../middlewares/forgetAuth";

const router = Router();

//w: (start)╭──────────── loginUser ────────────╮
router.post(
  "/login",
  validateRequest(authValidation.loginUserSchema),
  authController.loginUser,
);
//w: (end)  ╰──────────── loginUser ────────────╯

//w: (start)╭──────────── googleLogin ────────────╮
router.post(
  "/google",
  validateRequest(authValidation.googleLoginSchema),
  authController.googleLogin,
);
//w: (end)  ╰──────────── googleLogin ────────────╯

//w: (start)╭──────────── appleLogin ────────────╮
router.post(
  "/apple",
  validateRequest(authValidation.appleLoginSchema),
  authController.appleLogin,
);
//w: (end)  ╰──────────── appleLogin ────────────╯

//w: (start)╭──────────── sendForgotPassOtp ────────────╮
router.post(
  "/send-forgot-otp",
  validateRequest(authValidation.sendForgotPassOtpSchema),
  authController.sendForgotPassOtp,
);
//w: (end)  ╰──────────── sendForgotPassOtp ────────────╯

router.post(
  "/verify-forgot-otp",
  validateRequest(authValidation.verifyForgotPasswordOtpSchema),
  authController.verifyForgotPasswordOtpCode,
);

//w: (start)╭──────────── resetPassword ────────────╮
router.post(
  "/reset-password",
  forgetAuth(),
  validateRequest(authValidation.resetPasswordSchema),
  authController.resetPassword,
);
//w: (end)  ╰──────────── resetPassword ────────────╯

// auth guard
router.use(auth());

//w: (start)╭──────────── changePassword  ────────────╮
router.patch(
  "/change-pass",
  auth(),
  validateRequest(authValidation.changePasswordSchema),
  authController.changePassword,
);
//w: (end)  ╰──────────── changePassword  ────────────╯

router.get("/me", authController.fetchMyProfile);

router.patch(
  "/me/update",
  fileUploader.profileAndShopImages,
  parseBodyData,
  validateRequest(authValidation.updateProfileSchema),
  authController.updateProfile,
);

router.delete("/delete-account", auth(), authController.deleteMyAccount);

router.patch(
  "/update-profile-image",
  fileUploader.profileImage,
  auth(),
  authController.updateProfileImage,
);

router.get("/current-level", auth(), authController.getCurrentLevel);

router.get("/all-level", auth(), authController.getAllLevels);

export const authRoutes = router;
