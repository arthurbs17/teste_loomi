import { Request, Response } from "express";
import { UserRepository } from "../../user/repository/UserRepository";
import { ClienteRepository } from "../repository/ClienteRepository";

class DeleteClienteController {
  async handle(req: Request, res: Response) {
    try {
      const { cliente_id } = req.params;

      const cliente = await new ClienteRepository().findById(cliente_id);

      await new ClienteRepository().delete(cliente_id);
      await new UserRepository().delete(cliente.email);

      return res.sendStatus(204);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { DeleteClienteController };
