//
import { Router } from "express";
import { userRoutes } from "../modules/user/user.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { notificationRoutes } from "../modules/notification/notification.routes";
import { sessionRoutes } from "../modules/session/session.routes";

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
    path: "/session",
    route: sessionRoutes,
  },

  {
    path: "/notify",
    route: notificationRoutes,
  },
];
//w: (end)  ╰──────────── allRoutes ────────────╯

export const router = Router();

allRoutes.forEach((r) => router.use(r.path, r.route));
