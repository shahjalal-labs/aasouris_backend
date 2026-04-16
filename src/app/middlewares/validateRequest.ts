/* import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";

const validateRequest =
  (schema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: err.errors.map((error) => ({
            path: error.path.join("."),
            message: error.message,
          })),
        });
      }
      return next(err);
    }
  };

export default validateRequest; */

import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";

const validateRequest =
  (schema: ZodTypeAny) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (err) {
      if (err instanceof ZodError) {
        // Map each error to "Field message"
        const errorMessages = err.errors.map((error) => {
          const field = error.path.join(".");
          const capitalizedField = field
            ? field[0].toUpperCase() + field.slice(1)
            : "Field";
          return `${capitalizedField} ${error.message}`;
        });

        return res.status(400).json({
          success: false,
          // Join all errors into a single friendly message
          message: `Validation failed: ${errorMessages.join("; ")}`,
          // Keep the detailed errors array for frontend field-specific display
          errors: err.errors.map((error) => ({
            path: error.path.join("."),
            message: error.message,
          })),
        });
      }
      return next(err);
    }
  };

export default validateRequest;
