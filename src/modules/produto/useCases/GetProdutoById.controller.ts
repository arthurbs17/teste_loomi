import { Request, Response } from "express";
import { ProdutoRepository } from "../repository/ProdutoRepository";

class GetProdutoByIdController {
  async handle(req: Request, res: Response) {
    try {
      const { produto_id } = req.params;

      const produto = await new ProdutoRepository().findById(produto_id);

      return res.status(200).json(produto);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { GetProdutoByIdController };
