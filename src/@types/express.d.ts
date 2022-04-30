import {
  ICreateClientDTO,
  IClienteInterface,
} from "../modules/cliente/Dto/ICreateClienteDTO";

declare global {
  namespace Express {
    interface Request {
      validated: ICreateClientDTO;
      user: IClienteInterface;
    }
  }
}
