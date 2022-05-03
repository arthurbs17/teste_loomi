import { IUserInterface } from "../modules/user/Dto/IUserDTO";

declare global {
  namespace Express {
    interface Request {
      validated: any;
      user: IUserInterface;
    }
  }
}
