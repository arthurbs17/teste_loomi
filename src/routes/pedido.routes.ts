import { Router } from "express";
import { authenticateToken } from "../middlewares/authenticateToken.middleware";
import { validateShape } from "../middlewares/validateShape.middleware";
import { UpdatePedidoController } from "../modules/pedido/useCases/UpdatePedido.controller";
import { updatePedidoSchema } from "../schemas/updatePedido.schema";

const pedidoRouter = Router();

const updatePedidoController = new UpdatePedidoController();

pedidoRouter.put(
  "/update/:pedido_id",
  validateShape(updatePedidoSchema),
  authenticateToken,
  updatePedidoController.handle
);

export { pedidoRouter };
