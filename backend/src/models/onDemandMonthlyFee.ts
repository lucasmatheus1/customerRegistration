import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const OnDemandMonthlyFeeModel = {
  async create(data: any) {
    return await prisma.onDemandMonthlyFee.create({
      data,
    });
  },

  async find(where: any) {
    return await prisma.onDemandMonthlyFee.findMany({
      where,
    });
  },

  async findById(id: string) {
    return await prisma.onDemandMonthlyFee.findUnique({
      where: {
        id: id,
      },
    });
  },

  async update(id: string, data: any) {
    return await prisma.onDemandMonthlyFee.update({
      where: {
        id: id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.onDemandMonthlyFee.delete({
      where: {
        id: id,
      },
    });
  },
};