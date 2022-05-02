import { Router } from "express";
import { authenticateToken } from "../middlewares/authenticateToken.middleware";
import { validateShape } from "../middlewares/validateShape.middleware";
import { verifySameCliente } from "../middlewares/verifySameCliente.middleware";
import { GetPedidoByClienteId } from "../modules/pedido/useCases/GetPedidoByClienteId.controller";
import { UpdatePedidoController } from "../modules/pedido/useCases/UpdatePedido.controller";
import { updatePedidoSchema } from "../schemas/updatePedido.schema";

const pedidoRouter = Router();

const updatePedidoController = new UpdatePedidoController();
const getPedidoByClienteId = new GetPedidoByClienteId();

pedidoRouter.put(
  "/update/:pedido_id",
  validateShape(updatePedidoSchema),
  authenticateToken,
  updatePedidoController.handle
);

pedidoRouter.get(
  "/cliente/:cliente_id",
  authenticateToken,
  verifySameCliente,
  getPedidoByClienteId.handle
);

export { pedidoRouter };
