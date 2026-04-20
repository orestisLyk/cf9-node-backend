import { Request, Response, NextFunction } from "express";
import { IRole } from "../models/role.model";
export const hasReaderRole = (req: Request, res: Response, next: NextFunction) => {
    try{
        const checkReaderRole = req.user.roles.some( (r:IRole) => r.role === "reader" && r.active);
        if(!checkReaderRole) {
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid or Expired token" });
    }
}