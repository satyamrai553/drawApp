import { NextFunction, Request, Response } from "express";
import Jwt  from "jsonwebtoken";

import dotenv from 'dotenv';


dotenv.config({
 path: "./.env"
}
    
)

const JWT_SECRET = process.env.JWT_SECRET



export function authMiddleware(req: Request, res: Response, next: NextFunction){
    const token = req.headers["authorization"] ?? "";
    const decoded = Jwt.verify(token, JWT_SECRET);
    if(decoded){
        req.userId = decoded.userId;
    }else{
        res.status(403).json({
            message: "Unauthorized request"
        })
    }
}