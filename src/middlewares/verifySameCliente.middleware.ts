import { Request, Response, NextFunction } from "express";
import { ClienteRepository } from "../modules/cliente/repository/ClienteRepository";

const verifySameCliente = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cliente_id } = req.params;
  const cliente = await new ClienteRepository().findById(cliente_id);

  if (req.user.email !== cliente.email) {
    return res.status(401).json({ message: "cliente token not match" });
  }

  return next();
};

export { verifySameCliente };
