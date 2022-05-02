import { ICreatePedidoDTO, IPedidoInterface } from "../Dto/ICreatePedidoDTO";

export interface IPedidoRepository {
  create(data: ICreatePedidoDTO): Promise<IPedidoInterface>;
  findById(id: string): Promise<IPedidoInterface>;
  delete(id: string): Promise<void>;
  update(id: string, data: any): Promise<IPedidoInterface>;
  list(cliente_id: string): Promise<IPedidoInterface[]>;
}
