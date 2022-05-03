import {
  ICreateProdutoDTO,
  IProdutoInterface,
} from "../Dto/ICreateProdutosDTO";

export interface IProdutoRepository {
  create(produto: ICreateProdutoDTO): Promise<IProdutoInterface>;
  findByNome(nome: string): Promise<IProdutoInterface[]>;
  findById(id: string): Promise<IProdutoInterface>;
  findByCodigo(codigo: string): Promise<IProdutoInterface>;
  deleteForId(id: string): Promise<void>;
  deleteForCodigo(codigo: string): Promise<void>;
  updateForId(id: string, data: any): Promise<IProdutoInterface>;
  updateForCodigo(codigo: string, data: any): Promise<IProdutoInterface>;
  uploadImagem(id: string, url: any): Promise<IProdutoInterface>;
  list(): Promise<IProdutoInterface[]>;
}
