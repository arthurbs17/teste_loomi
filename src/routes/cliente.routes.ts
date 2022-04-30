import { Router } from "express";
import { CreateClienteController } from "../modules/cliente/useCases/CreateCliente.controller";
import { GetClienteByIdController } from "../modules/cliente/useCases/GetCliente.controller";

const clienteRouter = Router();

const createClienteController = new CreateClienteController();
const getClienteByIdController = new GetClienteByIdController();

clienteRouter.post("/register", createClienteController.handle);
clienteRouter.get("/:cliente_id", getClienteByIdController.handle);

export { clienteRouter };
