import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const ClientDataModel = {
  async create(data: any) {
    return await prisma.clientData.create({
      data,
    });
  },

  async find(where: any) {
    return await prisma.clientData.findMany({
      where,
    });
  },

  async findById(id: string) {
    return await prisma.clientData.findUnique({
      where: {
        id: id,
      },
    });
  },

  async update(id: string, data: any) {
    return await prisma.clientData.update({
      where: {
        id: id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.clientData.delete({
      where: {
        id: id,
      },
    });
  },
};
