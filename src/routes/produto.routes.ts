import { Router } from "express";
import { authenticateToken } from "../middlewares/authenticateToken.middleware";
import { validateShape } from "../middlewares/validateShape.middleware";
import { verifyIfIsCliente } from "../middlewares/verifyIfIsCliente.middleware";
import { CreateProdutoController } from "../modules/produto/useCases/CreateProduto.controller";
import { createProdutoSchema } from "../schemas/createProduto.schema";

const produtoRouter = Router();

const createProdutoController = new CreateProdutoController();

produtoRouter.post(
  "/register",
  validateShape(createProdutoSchema),
  authenticateToken,
  verifyIfIsCliente,
  createProdutoController.handle
);

export { produtoRouter };
