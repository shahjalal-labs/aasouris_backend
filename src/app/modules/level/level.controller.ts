import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { levelService } from "./level.service";

const getAllLevels = catchAsync(async (_req, res) => {
  const result = await levelService.getAllLevels();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All levels retrieved successfully",
    data: result,
  });
});

const getCurrentLevel = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const result = await levelService.getCurrentLevel(userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Current level retrieved successfully",
    data: result,
  });
});

const getBadges = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const result = await levelService.getBadges(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Badges retrieved successfully",
    data: result,
  });
});

export const levelController = {
  getAllLevels,
  getCurrentLevel,
  getBadges,
};
