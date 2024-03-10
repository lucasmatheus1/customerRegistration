import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {
  async create(data: any) {
    return await prisma.consultant.create({
      data,
    });
  },

  async find(where: any) {
    return await prisma.consultant.findMany({
      where,
    });
  },

  async findById(id: string) {
    return await prisma.consultant.findUnique({
      where: {
        id_consultant: id,
      },
    });
  },

  async update(id: string, data: any) {
    return await prisma.consultant.update({
      where: {
        id_consultant: id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.consultant.delete({
      where: {
        id_consultant: id,
      },
    });
  },
};
