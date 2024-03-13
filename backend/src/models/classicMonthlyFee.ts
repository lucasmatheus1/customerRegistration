import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const ClassicMonthlyFeeModel = {
  async create(data: any) {
    return await prisma.classicMonthlyFee.create({
      data,
    });
  },

  async find(where: any) {
    return await prisma.classicMonthlyFee.findMany({
      where,
    });
  },

  async findById(id: string) {
    return await prisma.classicMonthlyFee.findUnique({
      where: {
        id: id,
      },
    });
  },

  async update(id: string, data: any) {
    return await prisma.classicMonthlyFee.update({
      where: {
        id: id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.classicMonthlyFee.delete({
      where: {
        id: id,
      },
    });
  },
};