import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const ClientModel = {
  async create(data: any) {
    return await prisma.client.create({
      data,
    });
  },

  async find(where: any) {
    return await prisma.client.findMany({
      where,
    });
  },

  async findById(id: string) {
    return await prisma.client.findUnique({
      where: {
        id_client: id,
      },
    });
  },

  async update(id: string, data: any) {
    return await prisma.client.update({
      where: {
        id_client: id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.client.delete({
      where: {
        id_client: id,
      },
    });
  },
};
