import { Router } from "express";
import { CreateClienteController } from "../modules/cliente/useCases/CreateCliente.controller";
import { GetClienteByIdController } from "../modules/cliente/useCases/GetCliente.controller";
import { validateShape } from "../middlewares/validateShape.middleware";
import { createClienteSchema } from "../schemas/createCliente.schema";
import { DeleteClienteController } from "../modules/cliente/useCases/DeleteCliente.controller";
import { authenticateToken } from "../middlewares/authenticateToken.middleware";
import { UpdateClienteController } from "../modules/cliente/useCases/UpdateCliente.controller";
import { updateClienteSchema } from "../schemas/updateCliente.schema";

const clienteRouter = Router();

const createClienteController = new CreateClienteController();
const getClienteByIdController = new GetClienteByIdController();
const deleteClienteController = new DeleteClienteController();
const updateClienteController = new UpdateClienteController();

clienteRouter.post(
  "/register",
  validateShape(createClienteSchema),
  createClienteController.handle
);

clienteRouter.get(
  "/:cliente_id",
  authenticateToken,
  getClienteByIdController.handle
);

clienteRouter.delete(
  "/:cliente_id",
  authenticateToken,
  deleteClienteController.handle
);

clienteRouter.patch(
  "/:cliente_id",
  authenticateToken,
  validateShape(updateClienteSchema),
  updateClienteController.handle
);
export { clienteRouter };
