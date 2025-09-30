import jwt from "jsonwebtoken";
import { envs } from "../config/envs";

const JWT_SECRET = envs.JWT_SECRET;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in .env");
}

export function generateToken(userId: number) {
  return jwt.sign({ id: userId }, JWT_SECRET as string, {
    expiresIn: "5h",
  });
}