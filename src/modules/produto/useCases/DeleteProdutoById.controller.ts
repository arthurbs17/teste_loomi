import { Request, Response } from "express";
import { ProdutoRepository } from "../repository/ProdutoRepository";

class DeleteProdutoByIdController {
  async handle(req: Request, res: Response) {
    try {
      const { produto_id } = req.params;

      await new ProdutoRepository().deleteForId(produto_id);

      return res.sendStatus(204);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { DeleteProdutoByIdController };
