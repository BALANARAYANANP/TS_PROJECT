// src/middlewares/validate.ts
import { Request, Response, NextFunction } from 'express';
import { ZodSchema , ZodError} from 'zod';

export const validate =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction):void => {
    try {
      schema.parse(req.body);
      next();
    } catch (err: any) {
        if(err instanceof ZodError){
       res.status(400).json({
        message: err.errors[0].message,
      
      });}
    }
  };
