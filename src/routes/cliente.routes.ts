import { Router } from "express";
import { CreateClienteController } from "../modules/cliente/useCases/CreateCliente.controller";
import { GetClienteByIdController } from "../modules/cliente/useCases/GetCliente.controller";
import { validateShape } from "../middlewares/validateShape.middleware";
import { createClienteSchema } from "../schemas/createCliente.schema";

const clienteRouter = Router();

const createClienteController = new CreateClienteController();
const getClienteByIdController = new GetClienteByIdController();

clienteRouter.post(
  "/register",
  validateShape(createClienteSchema),
  createClienteController.handle
);
clienteRouter.get("/:cliente_id", getClienteByIdController.handle);

export { clienteRouter };
