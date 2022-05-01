export interface ICreateUserDTO {
  email: string;
  senha: string;
}

export interface IUserInterface {
  id: string;
  email: string;
  senha?: string;
}
