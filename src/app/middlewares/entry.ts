import { Request, Response } from "express";

//
export const entryMessage = (_req: Request, res: Response) => {
  res.send({
    message: "Welcome to backend server!!!",
  });
};

