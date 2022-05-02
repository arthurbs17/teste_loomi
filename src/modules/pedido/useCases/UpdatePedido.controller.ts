import { Request, Response } from "express";
import { PedidoRepository } from "../repository/PedidoRepository";

class UpdatePedidoController {
  async handle(req: Request, res: Response) {
    try {
      const { pedido_id } = req.params;
      const data = req.validated;

      const pedido = await new PedidoRepository().findById(pedido_id);

      if (!pedido) {
        throw new Error("pedido not found");
      }

      pedido.status = data.status;

      delete pedido.lista_produtos;

      await new PedidoRepository().update(pedido_id, pedido);

      const updatedPedido = await new PedidoRepository().findById(pedido_id);

      return res.status(200).json(updatedPedido);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { UpdatePedidoController };
