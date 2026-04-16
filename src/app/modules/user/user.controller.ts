import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { userService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";

//w: (start)╭──────────── createPendingUser ────────────╮
const createPendingUser = catchAsync(async (req, res) => {
  const result = await userService.createPendingUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Pending user created successfully, please verify",
    data: result,
  });
});
//w: (end)  ╰──────────── createPendingUser ────────────╯

//w: (start)╭──────────── verifyUser ────────────╮
const verifyUser = catchAsync(async (req, res) => {
  const { email, otp } = req.body;
  const result = await userService.verifyPendingUser(email, otp);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User verified successfully",
    data: result,
  });
});
//w: (end)  ╰──────────── verifyUser ────────────╯

//w: (start)╭──────────── getAllUser ────────────╮
const getAllUser = catchAsync(async (_req, res) => {
  const result = await userService.getAllUser();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "fetched successfully",
    data: result,
  });
});
//w: (end)  ╰──────────── getAllUser ────────────╯

//w: (start)╭──────────── getUserDetails ────────────╮
const getUserDetails = catchAsync(async (req, res) => {
  const { id: userId } = req.params;
  const result = await userService.getUserDetails(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User details fetched successfully",
    data: result,
  });
});
//w: (end)  ╰──────────── getUserDetails ────────────╯

export const userController = {
  createPendingUser,
  verifyUser,
  getAllUser,
  getUserDetails,
};
