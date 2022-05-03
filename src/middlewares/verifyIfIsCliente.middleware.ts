import { Request, Response, NextFunction } from "express";
import { ClienteRepository } from "../modules/cliente/repository/ClienteRepository";

const verifyIfIsCliente = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "unauthorize request" });
    }

    await new ClienteRepository().findByEmail(user.email);

    return res.status(401).json({ message: "access not allowed for clientes" });
  } catch (e) {
    return next();
  }
};

export { verifyIfIsCliente };
