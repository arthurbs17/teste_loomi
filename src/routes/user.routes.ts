import { Router } from "express";
import { CreateUserController } from "../modules/user/useCases/createUser.controller";
import { validateShape } from "../middlewares/validateShape.middleware";
import { loginUserSchema } from "../schemas/loginUser.schema";

const userRouter = Router();

const createUserController = new CreateUserController();

userRouter.post(
  "/register",
  validateShape(loginUserSchema),
  createUserController.handle
);

export { userRouter };
