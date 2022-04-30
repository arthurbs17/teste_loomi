import { ICreateUserDTO, IUserInterface } from "../Dto/IUserDTO";

export interface IUserRepository {
  create(cliente: ICreateUserDTO): Promise<IUserInterface>;
  findByEmail(email: string): Promise<IUserInterface>;
  findById(id: string): Promise<IUserInterface>;
}
