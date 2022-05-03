import { ICreateProdutosNoPedidoDTO } from "../Dto/ICreateProdutosNoPedidoDTO";

export interface IProdutosNoPedidoRepository {
  create(data: ICreateProdutosNoPedidoDTO[]): Promise<void>;
}
