import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";

declare module "express-serve-static-core" {
  interface Request {
    user?: string | JwtPayload;
  }
}

const protectRoute = (req: Request, res: Response, next: Function) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "You are not authorized" });
  }
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET as string);
    if (!user) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ message: "You are not authorized" });
  }
};

export default protectRoute;
