import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const ThirdPartyModel = {
  async create(data: any) {
    return await prisma.thirdParty.create({
      data,
    });
  },

  async find(where: any) {
    return await prisma.thirdParty.findMany({
      where,
    });
  },

  async findById(id: string) {
    return await prisma.thirdParty.findUnique({
      where: {
        id: id,
      },
    });
  },

  async update(id: string, data: any) {
    return await prisma.thirdParty.update({
      where: {
        id: id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.thirdParty.delete({
      where: {
        id: id,
      },
    });
  },
};