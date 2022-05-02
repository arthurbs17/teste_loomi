import { Request, Response } from "express";
import { ProdutoRepository } from "../repository/ProdutoRepository";

class UpdateProdutoByCodController {
  async handle(req: Request, res: Response) {
    try {
      const data = req.validated;
      const { codigo } = req.query;

      const produto = await new ProdutoRepository().findByCodigo(
        String(codigo)
      );

      if (!produto) {
        throw new Error("produto not found");
      }

      produto.nome = data.nome ? data.nome : produto.nome;
      produto.codigo = data.codigo ? data.codigo : produto.codigo;
      produto.preco = data.preco ? data.preco : produto.preco;
      produto.caracteristicas = data.caracteristicas
        ? data.caracteristicas
        : produto.caracteristicas;

      const updatedProduto = await new ProdutoRepository().updateForCodigo(
        String(codigo),
        produto
      );

      return res.status(200).json(updatedProduto);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { UpdateProdutoByCodController };
