import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';
const validateRequest =
  (zodValidator: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await zodValidator.parseAsync({
        body: req.body,
        params: req.params,
        query: req.query,
        cookies: req.cookies,
      });
      next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
