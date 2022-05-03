import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

export const validateShape =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      const validated = await shape.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.validated = validated;

      return next();
    } catch (e: any) {
      res.status(400).json({ error: e.errors });
    }
  };
