import { Request, Response } from "express";
import { ClienteRepository } from "../repository/ClienteRepository";
import { UserRepository } from "../../user/repository/UserRepository";

class CreateClienteController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.validated;

      data.email = data.email.toLowerCase();
      data.nome = data.nome.toLowerCase();

      await new UserRepository().create({
        email: data.email,
        senha: data.senha,
      });

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
