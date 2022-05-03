import { Request, Response } from "express";
import { UserRepository } from "../repository/UserRepository";

class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.validated;

      const createdUser = await new UserRepository().create(data);

      delete createdUser.senha;

      return res.status(201).json(createdUser);
    } catch (e: any) {
      if (e.code === "P2002") {
        return res.status(409).json({ error: "email already exists" });
      }
      return res.status(400).json(e);
    }
  }
}

export { CreateUserController };
