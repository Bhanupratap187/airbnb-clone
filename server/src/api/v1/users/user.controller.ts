import { Request, Response, NextFunction } from "express";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(201).json({
    message: "User registered successfully",
    email: req.body.email,
  });
};
