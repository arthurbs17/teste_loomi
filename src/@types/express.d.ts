import { ICreateClientDTO } from "../modules/cliente/Dto/ICreateClienteDTO";
import { IUserInterface } from "../modules/user/Dto/IUserDTO";

declare global {
  namespace Express {
    interface Request {
      validated: ICreateClientDTO;
      user: IUserInterface;
    }
  }
}
