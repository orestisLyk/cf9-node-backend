import { Request, Response, NextFunction } from "express";
import User from "../models/user.model";

export const hasReaderRole = (req: Request, res: Response, next: NextFunction) => {
    try{

    } catch (error) {
        res.status(401).json({ message: "Invalid or Expired token" });
    }
}