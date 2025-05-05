import { NextFunction, Request, Response } from "express";
import Jwt  from "jsonwebtoken";
import {JWT_SECRET} from "@repo/backend-common/config"

interface AuthenticatedRequest extends Request {
    userId?: string;
  }
  
  export function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.headers["authorization"] ?? "";
  
    if (!JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined.");
    }
  
    try {
      const decoded = Jwt.verify(token, JWT_SECRET) as { userId: string };
      req.userId = decoded.userId;
      next();
    } catch (err) {
      res.status(403).json({ message: "Unauthorized request" });
    }
  }
  