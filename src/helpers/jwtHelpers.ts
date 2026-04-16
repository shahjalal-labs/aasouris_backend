import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import config from "../config";
import { SignOptions } from "jsonwebtoken";

const generateToken = (payload: any) => {
  const token = jwt.sign(
    payload,
    config.jwt.jwt_secret as Secret,
    {
      algorithm: "HS256",
      expiresIn: config.jwt.expires_in as string,
    } as SignOptions,
  );

  return token;
};

const verifyToken = (token: string) => {
  return jwt.verify(token, config.jwt.jwt_secret as string) as JwtPayload;
};

export const jwtHelpers = {
  generateToken,
  verifyToken,
};
