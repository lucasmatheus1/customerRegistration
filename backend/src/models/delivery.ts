import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const DeliveryModel = {
  async create(data: any) {
    return await prisma.delivery.create({
      data,
    });
  },

  async find(where: any) {
    return await prisma.delivery.findMany({
      where,
    });
  },

  async findById(id: string) {
    return await prisma.delivery.findUnique({
      where: {
        id: id,
      },
    });
  },

  async update(id: string, data: any) {
    return await prisma.delivery.update({
      where: {
        id: id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.delivery.delete({
      where: {
        id: id,
      },
    });
  },
};