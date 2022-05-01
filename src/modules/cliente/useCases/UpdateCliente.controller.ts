import { Request, Response } from "express";
import { UserRepository } from "../../user/repository/UserRepository";
import { ClienteRepository } from "../repository/ClienteRepository";

class UpdateClienteController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.validated;
      const { cliente_id } = req.params;

      const cliente = await new ClienteRepository().findById(cliente_id);

      if (!cliente) {
        throw new Error("cliente not found");
      }

      const user = await new UserRepository().findByEmail(cliente.email);

      cliente.email = data.email ? data.email : cliente.email;
      cliente.senha = data.senha ? data.senha : cliente.senha;
      cliente.endereco = data.endereco ? data.endereco : cliente.endereco;
      cliente.nome = data.nome ? data.nome : cliente.nome;
      cliente.telefone = data.telefone ? data.telefone : cliente.telefone;

      const updatedCliente = await new ClienteRepository().update(
        cliente_id,
        cliente
      );

      user.email = data.email ? data.email : user.email;
      user.senha = data.senha ? data.senha : user.senha;

      await new UserRepository().update(user.id, user);

      return res.status(200).json(updatedCliente);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { UpdateClienteController };
