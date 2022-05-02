import { Request, Response } from "express";
import { ProdutoRepository } from "../repository/ProdutoRepository";

class GetProdutoWithParamsController {
  async handle(req: Request, res: Response) {
    try {
      const { nome } = req.query;
      const { codigo } = req.query;

      if (nome && typeof nome === "string") {
        const produtos = await new ProdutoRepository().findByNome(nome);
        return res.status(200).json(produtos);
      }

      if (codigo && typeof codigo === "string") {
        const produto = await new ProdutoRepository().findByCodigo(codigo);
        return res.status(200).json(produto);
      }

      const produtos = await new ProdutoRepository().list();

      return res.status(200).json(produtos);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { GetProdutoWithParamsController };
