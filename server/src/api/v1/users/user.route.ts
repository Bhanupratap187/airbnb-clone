import { Router } from "express";

import * as userController from "./user.controller";

const userRouter = Router();

userRouter.post("/register", userController.registerUser);

export default userRouter;
