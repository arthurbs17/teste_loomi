import { Request, Response } from "express";
import { UserRepository } from "../repository/UserRepository";
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import { jwtConifg } from "../../../database/auth";

class LoginUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, senha } = req.validated;

      const user = await new UserRepository().findByEmail(email);

      if (!user.senha) {
        throw new Error("invalid user");
      }

      const match = await bcrypt.compare(senha, user.senha);

      if (!match) {
        return res.status(401).json({ message: "wrong email/senha" });
      }

      const token = JWT.sign({ ...user }, jwtConifg.secretKey, {
        expiresIn: jwtConifg.expiresIn,
      });

      return res.status(200).json({ acessToken: token });
    } catch (e) {
      return res.status(401).json(e);
    }
  }
}

export { LoginUserController };
