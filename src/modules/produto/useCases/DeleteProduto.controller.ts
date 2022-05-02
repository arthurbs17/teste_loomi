import { Request, Response } from "express";
import { ProdutoRepository } from "../repository/ProdutoRepository";

class DeleteProdutoController {
  async handle(req: Request, res: Response) {
    try {
      const { codigo } = req.query;

      if (codigo && typeof codigo === "string") {
        await new ProdutoRepository().deleteForCodigo(codigo);
        return res.sendStatus(204);
      }

      return res.status(400).json({ message: "produto not found" });
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { DeleteProdutoController };
