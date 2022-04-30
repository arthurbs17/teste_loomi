import { ICreateClientDTO, IClienteInterface } from "../Dto/ICreateClienteDTO";

export interface IClienteRepository {
  create(cliente: ICreateClientDTO): Promise<IClienteInterface>;
  findByEmail(email: string): Promise<IClienteInterface>;
  findById(id: string): Promise<IClienteInterface>;
}
