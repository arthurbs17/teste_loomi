import { inject, injectable } from "tsyringe";
import dotenv from "dotenv";

dotenv.config();

import { IS3Provider } from "../../../../shared/providers/S3Providers/IS3Providers";
import { ProdutoRepository } from "../../repository/ProdutoRepository";

interface IRequest {
  id: string;
  imagem: string;
}

@injectable()
export class UploadImagemProduto {
  constructor(
    @inject("S3Provider")
    private s3Provider: IS3Provider
  ) {}

  async execute({ imagem, id }: IRequest): Promise<void> {
    this.s3Provider.save(imagem);

    const data = {
      imagem: `${process.env.BASE_URL_BUCKET}/avatar/${imagem}`,
    };

    await new ProdutoRepository().uploadImagem(id, data);
  }
}
