export interface ICreateUserDTO {
  email: string;
  senha: string;
}

export interface IUserInterface {
  email: string;
  senha?: string;
}
