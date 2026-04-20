import {Request, Response, NextFunction } from 'express';
import * as userService from '../services/user.service';
import { UpdateUserDTO } from '../dto/user.dto';

export const getAllUsers = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await userService.findAllUsers();
        res.status(200).json(result);
    } catch (error) {
        next(error);

    }
}

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

export const update = async(req:Request, res: Response, next: NextFunction) => {
    try {
        const username:string = req.params.username as string;
        const data: UpdateUserDTO = req.body;
        const result = await userService.updateUser(username, data);
        if(!result) {
            return res.status(401).json({ message: 'Failed to update user' });
        }
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}