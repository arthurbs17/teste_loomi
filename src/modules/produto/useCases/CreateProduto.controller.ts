import { Request, Response } from "express";
import { ProdutoRepository } from "../repository/ProdutoRepository";

class CreateProdutoController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.validated;

      data.nome = data.nome.toLowerCase();
      data.caracteristicas = data.caracteristicas.toLowerCase();

      const newProduto = await new ProdutoRepository().create(data);

      return res.status(201).json(newProduto);
    } catch (e: any) {
      if (e.code === "P2002") {
        return res.status(409).json({ error: "codigo already registered" });
      }
      return res.status(400).json(e);
    }
  }
}

export { CreateProdutoController };
