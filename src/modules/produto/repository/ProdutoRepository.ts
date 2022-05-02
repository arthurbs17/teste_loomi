import { prismaClient } from "../../../database/prismaClient";
import {
  ICreateProdutoDTO,
  IProdutoInterface,
} from "../Dto/ICreateProdutosDTO";
import { IProdutoRepository } from "./IProdutoRepository";

class ProdutoRepository implements IProdutoRepository {
  private prismaProduto = prismaClient;

  async create(produto: ICreateProdutoDTO): Promise<IProdutoInterface> {
    const newProduto = await this.prismaProduto.produto.create({
      data: { ...produto },
    });
    return newProduto;
  }

  async findByNome(nome: string): Promise<IProdutoInterface[]> {
    const produto = await this.prismaProduto.produto.findMany({
      where: { nome: { contains: nome } },
    });

    return produto;
  }

  async findById(id: string): Promise<IProdutoInterface> {
    const produto = await this.prismaProduto.produto.findUnique({
      where: { id },
    });

    if (!produto) {
      throw new Error("produto not found");
    }

    return produto;
  }

  async findByCodigo(codigo: string): Promise<IProdutoInterface> {
    const produto = await this.prismaProduto.produto.findUnique({
      where: { codigo },
    });

    if (!produto) {
      throw new Error("produto not found");
    }

    return produto;
  }

  async deleteForId(id: string): Promise<void> {
    const produto = await this.prismaProduto.produto.delete({ where: { id } });
  }

  async deleteForCodigo(codigo: string): Promise<void> {
    const produto = await this.prismaProduto.produto.delete({
      where: { codigo },
    });
  }

  async updateForId(id: string, data: any): Promise<IProdutoInterface> {
    const produto = await this.prismaProduto.produto.update({
      where: { id },
      data: { ...data },
    });

    return produto;
  }

  async updateForCodigo(codigo: string, data: any): Promise<IProdutoInterface> {
    const produto = await this.prismaProduto.produto.update({
      where: { codigo },
      data: { ...data },
    });

    return produto;
  }

  async list(): Promise<IProdutoInterface[]> {
    const produtos = await this.prismaProduto.produto.findMany();

    return produtos;
  }
}

export { ProdutoRepository };
