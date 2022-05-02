import { Router } from "express";
import { clienteRouter } from "./cliente.routes";
import { pedidoRouter } from "./pedido.routes";
import { produtoRouter } from "./produto.routes";
import { userRouter } from "./user.routes";

const router = Router();

router.use("/cliente", clienteRouter);
router.use("/user", userRouter);
router.use("/produto", produtoRouter);
router.use("/pedido", pedidoRouter);

export { router };
