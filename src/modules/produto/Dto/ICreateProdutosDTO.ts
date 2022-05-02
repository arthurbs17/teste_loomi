export interface ICreateProdutoDTO {
  nome: string;
  preco: string;
  codigo: string;
  caracteristicas: string;
  imagem: string | null;
}

export interface IProdutoInterface {
  id: string;
  nome: string;
  preco: string;
  codigo: string;
  caracteristicas: string;
  imagem: string | null;
}
