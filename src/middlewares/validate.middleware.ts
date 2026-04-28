import {Request, Response, NextFunction} from 'express';
import { ZodTypeAny } from 'zod';

export const validate = (schema: ZodTypeAny) => 
    (req:Request, res: Response, next: NextFunction) => {
        try {
            const toValidate = {
                body: req.body,
                query: req.query,
                params: req.params
            };
            schema.parse(toValidate.body);
            next();
        } catch (error:any) {
            return res.status(400).json({ error: 'Validation failed', details: error?.errors || 'validation error'});
        }
    }
