import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadImagemProduto } from "./awsService/S3Service";

class UploadImagemProdutoController {
  async handle(req: Request, res: Response) {
    try {
      if (!req.file) {
        throw new Error("not file to upload");
      }
      const imagem = req.file.filename;

      const { produto_id } = req.params;

      const uploadImagemProduto = container.resolve(UploadImagemProduto);

      const result = await uploadImagemProduto.execute({
        imagem,
        id: produto_id,
      });

      return res.status(200).json(result);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { UploadImagemProdutoController };
