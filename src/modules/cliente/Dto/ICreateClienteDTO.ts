export interface ICreateClientDTO {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
  endereco: string;
}

export interface IClienteInterface extends ICreateClientDTO {
  id: string;
}
