import { Request, Response } from "express";
import { ClienteRepository } from "../repository/ClienteRepository";

class CreateClienteController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const createCliente = await new ClienteRepository().create(data);

      return res.status(201).json(createCliente);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { CreateClienteController };
