import { Request, Response } from "express";
import { ClienteRepository } from "../repository/ClienteRepository";

class GetClienteByIdController {
  async handle(req: Request, res: Response) {
    try {
      const { cliente_id } = req.params;

      const cliente = await new ClienteRepository().findById(cliente_id);

      delete cliente.senha;

      return res.status(200).json(cliente);
    } catch (e) {
      return res.status(404).json({ error: "cliente not found" });
    }
  }
}

export { GetClienteByIdController };
