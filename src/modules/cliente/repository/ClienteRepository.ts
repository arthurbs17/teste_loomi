import { prismaClient } from "../../../database/prismaClient";
import { IClienteInterface, ICreateClientDTO } from "../Dto/ICreateClienteDTO";
import { IClienteRepository } from "./IClienteRepository";

class ClienteRepository implements IClienteRepository {
  private prismaCliente = prismaClient;

  async create(cliente: ICreateClientDTO): Promise<IClienteInterface> {
    const newCliente = await this.prismaCliente.cliente.create({
      data: { ...cliente },
    });
    return newCliente;
  }

  async findById(id: string): Promise<IClienteInterface> {
    const cliente = await this.prismaCliente.cliente.findUnique({
      where: { id },
    });

    if (!cliente) {
      throw new Error("cliente not found");
    }

    return cliente;
  }

  async findByEmail(email: string): Promise<IClienteInterface> {
    const cliente = await this.prismaCliente.cliente.findUnique({
      where: { email },
    });

    if (!cliente) {
      throw new Error("cliente not found");
    }

    return cliente;
  }

  async delete(id: string): Promise<void> {
    const cliente = await this.prismaCliente.cliente.delete({
      where: { id },
    });
  }

  async update(id: string, data: any): Promise<IClienteInterface> {
    const cliente = await this.prismaCliente.cliente.update({
      where: { id },
      data: { ...data },
    });

    return cliente;
  }

  async list(): Promise<IClienteInterface[]> {
    const clientes = await this.prismaCliente.cliente.findMany();

    return clientes;
  }
}

export { ClienteRepository };
