import { Request, Response, NextFunction } from "express";
import { ClienteRepository } from "../modules/cliente/repository/ClienteRepository";

const verifyIfIsCliente = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user;

  if (!user) {
    return res.status(401).json({ message: "unauthorize request" });
  }

  const cliente = await new ClienteRepository().findByEmail(user.email);

  if (cliente) {
    return res.status(401).json({ message: "access not allowed for clientes" });
  }

  return next();
};

export { verifyIfIsCliente };
