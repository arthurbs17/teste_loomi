import { Router } from "express";
import { CreateUserController } from "../modules/user/useCases/createUser.controller";
import { validateShape } from "../middlewares/validateShape.middleware";
import { createUserSchema } from "../schemas/createUser.schema";
import { loginUserSchema } from "../schemas/loginUser.schema";
import { LoginUserController } from "../modules/user/useCases/loginUser.controller";

const userRouter = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

userRouter.post(
  "/register",
  validateShape(createUserSchema),
  createUserController.handle
);

userRouter.post(
  "/sigin",
  validateShape(loginUserSchema),
  loginUserController.handle
);

export { userRouter };
