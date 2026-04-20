import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { sessionService } from "./session.service";
import { pick } from "../../../shared/pick";
import { paginationOptions } from "../../../shared/paginationHelper";
import prisma from "../../../shared/prisma";
import { http } from "winston";

const createSession = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const result = await sessionService.createSession(userId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Session created successfully",
    data: result,
  });
});

const getAllSessions = catchAsync(async (req, res) => {
  const { id: userId } = req.user;
  const paginations = pick(req.query, paginationOptions);

  const filter = pick(req.query, ["day", "month", "year"]);

  const result = await sessionService.getAllSessions(
    userId,
    paginations,
    filter,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All sessions retrieved successfully",
    data: result,
  });
});

const getWeeklySessions = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getWeeklySessions(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Weekly sessions retrieved successfully",
    data: result,
  });
});

const thisWeekTotal = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.thisWeekTotal(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "This week total retrieved successfully",
    data: result,
  });
});

const getAnalyticStats = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getAnalyticStats(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Analytics stats retrieved successfully",
    data: result,
  });
});

const getMorningVsNight = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getMorningVsNight(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Morning vs night stat retrieved successfully",
    data: result,
  });
});

const getCurrentStreak = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getCurrentStreak(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Current streak retrieved successfully",
    data: result,
  });
});

const getStarCount = catchAsync(async (req, res) => {
  const { id: userId } = req.user;

  const result = await sessionService.getStarCount(userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Start count retrieved successfully",
    data: result,
  });
});

export const sessionController = {
  createSession,
  getAllSessions,
  getWeeklySessions,
  thisWeekTotal,
  getAnalyticStats,
  getMorningVsNight,
  getCurrentStreak,
  getStarCount,
};
