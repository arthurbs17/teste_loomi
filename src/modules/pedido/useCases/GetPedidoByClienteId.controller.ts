import { Request, Response } from "express";
import { PedidoRepository } from "../repository/PedidoRepository";

class GetPedidoByClienteId {
  async handle(req: Request, res: Response) {
    try {
      const { cliente_id } = req.params;

      const pedidos = await new PedidoRepository().list(cliente_id);

      return res.status(200).json(pedidos);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { GetPedidoByClienteId };
