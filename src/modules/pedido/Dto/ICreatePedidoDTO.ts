import { IClienteInterface } from "../../cliente/Dto/ICreateClienteDTO";
import { IProdutoInterface } from "../../produto/Dto/ICreateProdutosDTO";

export interface ICreatePedidoDTO {
  cliente_id: string;
}

export interface IPedidoInterface {
  id: string;
  data_pedido: Date;
  status: string;
  cliente?: IClienteInterface;
  lista_produtos?: any;
}
