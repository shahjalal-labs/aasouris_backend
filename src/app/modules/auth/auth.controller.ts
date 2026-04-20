import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { authService } from "./auth.service";
import sendResponse from "../../../shared/sendResponse";
import config, { NODE_ENV } from "../../../config";

//w: (start)╭──────────── loginUser ────────────╮
const loginUser = catchAsync(async (req, res) => {
  const result = await authService.loginUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully!",
    data: result,
  });
});
//w: (end)  ╰──────────── loginUser ────────────╯

//w: (start)╭──────────── googleLogin ────────────╮
const googleLogin = catchAsync(async (req, res) => {
  const result = await authService.googleLogin(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Google logged in successful",
    data: result,
  });
});
//w: (end)  ╰──────────── googleLogin ────────────╯

//w: (start)╭──────────── appleLogin ────────────╮
const appleLogin = catchAsync(async (req, res) => {
  const result = await authService.appleLogin(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Apple logged in successful",
    data: result,
  });
});
//w: (end)  ╰──────────── appleLogin ────────────╯

//w: (start)╭──────────── fetchMyProfile ────────────╮
const fetchMyProfile = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await authService.fetchMyProfile(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "My profile fetched successfully.",
    data: result,
  });
});
//w: (end)  ╰──────────── fetchMyProfile ────────────╯

//w: (start)╭──────────── updateProfile ────────────╮
/* const updateProfile = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const result = await AuthService.updateProfile(userId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile updated successfully.",
    data: result,
  });
}); */

// change for image upload
const updateProfile = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await authService.updateProfile(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile updated successfully.",
    data: result,
  });
});
//w: (end)  ╰──────────── updateProfile ────────────╯

//w: (start)╭──────────── changePassword ────────────╮
const changePassword = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await authService.changePassword(userId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password changed successfully.",
    data: result,
  });
});
//w: (end)  ╰──────────── changePassword ────────────╯

//w: (start)╭──────────── sendForgotPassOtp ────────────╮
const sendForgotPassOtp = catchAsync(async (req, res) => {
  const otp = await authService.sendForgotPassOtp(req.body.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Reset password otp send to your email. Please check and verify.",
    ...(config.env === NODE_ENV.DEVELOPMENT ? { data: otp } : {}),
  });
});
//w: (end)  ╰──────────── sendForgotPassOtp ────────────╯

//w: (start)╭──────────── verifyForgotPasswordOtpCode ────────────╮
const verifyForgotPasswordOtpCode = catchAsync(async (req, res) => {
  const response = await authService.verifyForgotPasswordOtp(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "OTP verified successfully.",
    data: response,
  });
});
//w: (end)  ╰──────────── verifyForgotPasswordOtpCode ────────────╯

//w: (start)╭──────────── resetPassword ────────────╮
const resetPassword = catchAsync(async (req, res) => {
  const { email } = req.user;
  req.body.email = email;
  await authService.resetPassword(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password reset successfully.",
  });
});
//w: (end)  ╰──────────── resetPassword ────────────╯

//w: (start)╭──────────── deleteMyAccount ────────────╮
const deleteMyAccount = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await authService.deleteMyAccount(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User deleted successfully",
    data: result,
  });
});
//w: (end)  ╰──────────── deleteMyAccount ────────────╯

//w: (start)╭──────────── updateProfileImage ────────────╮
const updateProfileImage = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const file = req.file;

  const result = await authService.updateProfileImage(userId, file!);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Profile image updated successfully",
    data: result,
  });
});
//w: (end)  ╰──────────── updateProfileImage ────────────╯

export const authController = {
  loginUser,
  googleLogin,
  appleLogin,
  fetchMyProfile,
  updateProfile,
  changePassword,
  sendForgotPassOtp,
  verifyForgotPasswordOtpCode,
  resetPassword,
  deleteMyAccount,
  updateProfileImage,
};
