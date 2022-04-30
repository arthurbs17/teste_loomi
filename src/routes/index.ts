import { Router } from "express";
import { clienteRouter } from "./cliente.routes";

const router = Router();

router.use("/cliente", clienteRouter);

export { router };