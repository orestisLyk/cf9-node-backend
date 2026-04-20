import {Request, Response, NextFunction} from 'express';
import { ZodSchema } from 'zod/v3';
import ca from 'zod/v4/locales/ca.js';

export const validate = (schema: ZodSchema<any>) => 
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
