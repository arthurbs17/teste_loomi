import { prismaClient } from "../../../database/prismaClient";
import { ICreateUserDTO, IUserInterface } from "../Dto/IUserDTO";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  private prismaUser = prismaClient;

  async create(user: ICreateUserDTO): Promise<IUserInterface> {
    const newUser = await this.prismaUser.user.create({
      data: { ...user },
    });
    return newUser;
  }

  async findById(id: string): Promise<IUserInterface> {
    const user = await this.prismaUser.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new Error("user not found");
    }

    return user;
  }

  async findByEmail(email: string): Promise<IUserInterface> {
    const user = await this.prismaUser.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("user not found");
    }

    return user;
  }
}

export { UserRepository };
