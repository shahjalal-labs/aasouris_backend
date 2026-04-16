//
import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { notificationRoutes } from "../modules/notification/notification.routes";

type TAllRoutes = {
  path: string;
  route: Router;
};

// user
//w: (start)╭──────────── allRoutes ────────────╮
const allRoutes: TAllRoutes[] = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/notify",
    route: notificationRoutes,
  },
];
//w: (end)  ╰──────────── allRoutes ────────────╯

export const router = Router();

allRoutes.forEach((r) => router.use(r.path, r.route));
