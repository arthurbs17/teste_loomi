import { Request, Response } from "express";
import { PedidoRepository } from "../repository/PedidoRepository";
import { ProdutosNoPedidoRepository } from "../../produtosNoPedido/repository/ProdutosNoPedidoRespository";
import { ICreateProdutosNoPedidoDTO } from "../../produtosNoPedido/Dto/ICreateProdutosNoPedidoDTO";

class CreatePedidoController {
  async handle(req: Request, res: Response) {
    try {
      const { cliente_id } = req.params;
      const dataCliente = {
        cliente_id: cliente_id,
      };

      const newPedido = await new PedidoRepository().create(dataCliente);

      const dataProduto = req.body;

      const dataPedido: ICreateProdutosNoPedidoDTO[] = [];

      for (let i = 0; i < dataProduto.length; i++) {
        dataProduto[i].pedido_id = newPedido.id;
        dataPedido.push(dataProduto[i]);
      }

      await new ProdutosNoPedidoRepository().create(dataPedido);

      const pedido = await await new PedidoRepository().findById(newPedido.id);

      return res.status(201).json(pedido);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}

export { CreatePedidoController };
