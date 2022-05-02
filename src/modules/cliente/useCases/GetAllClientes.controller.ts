import { Request, Response } from "express";
import { ClienteRepository } from "../repository/ClienteRepository";

class GetAllClientesController {
  async handle(req: Request, res: Response) {
    try {
      const clientes = await new ClienteRepository().list();

      return res.status(200).json(clientes);
    } catch (e) {
      res.status(404).json(e);
    }
  }
}

export { GetAllClientesController };
