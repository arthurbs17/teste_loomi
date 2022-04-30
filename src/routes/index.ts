import { Router } from "express";
import { clienteRouter } from "./cliente.routes";
import { userRouter } from "./user.routes";

const router = Router();

router.use("/cliente", clienteRouter);
router.use("/user", userRouter);

export { router };
