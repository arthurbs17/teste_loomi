import e, { Request, Response } from "express";
import { ClienteRepository } from "../repository/ClienteRepository";

class GetClienteByIdController {
  async handle(req: Request, res: Response) {
    try {
      const { cliente_id } = req.params;

      const cliente = await new ClienteRepository().findById(cliente_id);

      return res.status(200).json(cliente);
    } catch (error) {
      return res.status(404).json(e);
    }
  }
}

export { GetClienteByIdController };
