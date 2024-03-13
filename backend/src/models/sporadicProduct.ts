import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const SporadicProductModel = {
  async create(data: any) {
    return await prisma.sporadicProduct.create({
      data,
    });
  },

  async find(where: any) {
    return await prisma.sporadicProduct.findMany({
      where,
    });
  },

  async findById(id: string) {
    return await prisma.sporadicProduct.findUnique({
      where: {
        id: id,
      },
    });
  },

  async update(id: string, data: any) {
    return await prisma.sporadicProduct.update({
      where: {
        id: id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.sporadicProduct.delete({
      where: {
        id: id,
      },
    });
  },
};