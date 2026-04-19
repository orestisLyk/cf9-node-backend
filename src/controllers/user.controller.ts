import {Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';

export const getOneByEmail = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const email = req.params.email as string;
        const result = await userService.findUserByEmail(email);
        if (!result) {
            return res.status(404).json({ message: 'User not found' });
        } 
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}

export const create = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
}