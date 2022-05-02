import { prismaClient } from "../../../database/prismaClient";
import { ICreateProdutosNoPedidoDTO } from "../Dto/ICreateProdutosNoPedidoDTO";
import { IProdutosNoPedidoRepository } from "./IProdutosNoPedidoRepository";

class ProdutosNoPedidoRepository implements IProdutosNoPedidoRepository {
  private prismaProdNoPed = prismaClient;

  async create(data: ICreateProdutosNoPedidoDTO[]): Promise<void> {
    await this.prismaProdNoPed.produtosNoPedido.createMany({
      data: data,
      skipDuplicates: true,
    });
  }
}

export { ProdutosNoPedidoRepository };
