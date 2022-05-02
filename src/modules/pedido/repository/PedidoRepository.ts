import { prismaClient } from "../../../database/prismaClient";
import { ICreatePedidoDTO, IPedidoInterface } from "../Dto/ICreatePedidoDTO";
import { IPedidoRepository } from "./IPedidoRepository";

class PedidoRepository implements IPedidoRepository {
  private prismaPedido = prismaClient;

  async create(data: ICreatePedidoDTO): Promise<IPedidoInterface> {
    const newPedido = await this.prismaPedido.pedido.create({
      data: { ...data },
    });

    return newPedido;
  }

  async findById(id: string): Promise<IPedidoInterface> {
    const pedido = await this.prismaPedido.pedido.findUnique({
      where: { id },
      include: { lista_produtos: true },
    });

    if (!pedido) {
      throw new Error("pedido not found");
    }

    return pedido;
  }

  async delete(id: string): Promise<void> {
    await this.prismaPedido.pedido.delete({ where: { id } });
  }

  async update(id: string, data: any): Promise<IPedidoInterface> {
    const pedido = await this.prismaPedido.pedido.update({
      where: { id },
      data: { ...data },
    });

    return pedido;
  }

  async list(cliente_id: string): Promise<IPedidoInterface[]> {
    const pedidos = await this.prismaPedido.pedido.findMany({
      where: { cliente_id },
    });

    return pedidos;
  }
}

export { PedidoRepository };
