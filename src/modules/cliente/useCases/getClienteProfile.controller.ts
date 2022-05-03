import { Request, Response } from "express";
import { ClienteRepository } from "../repository/ClienteRepository";

class GetClienteProfileController {
  async handle(req: Request, res: Response) {
    try {
      const user = req.user;

      const cliente = await new ClienteRepository().findByEmail(user.email);

      delete cliente.senha;

      return res.status(200).json(cliente);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { GetClienteProfileController };
