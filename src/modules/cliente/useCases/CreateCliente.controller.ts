import { Request, Response } from "express";
import { ClienteRepository } from "../repository/ClienteRepository";

class CreateClienteController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.validated;

      const createCliente = await new ClienteRepository().create(data);

      delete createCliente.senha;

      return res.status(201).json(createCliente);
    } catch (e: any) {
      if (e.code === "P2002") {
        return res.status(409).json({ error: "email already exists" });
      }
      return res.status(400).json(e);
    }
  }
}

export { CreateClienteController };
