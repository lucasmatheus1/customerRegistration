import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const ThirdPartyServicesModel = {
  async create(data: any) {
    return await prisma.thirdPartyServices.create({
      data,
    });
  },

  async find(where: any) {
    return await prisma.thirdPartyServices.findMany({
      where,
    });
  },

  async findById(id: string) {
    return await prisma.thirdPartyServices.findUnique({
      where: {
        id: id,
      },
    });
  },

  async update(id: string, data: any) {
    return await prisma.thirdPartyServices.update({
      where: {
        id: id,
      },
      data,
    });
  },

  async delete(id: string) {
    return await prisma.thirdPartyServices.delete({
      where: {
        id: id,
      },
    });
  },
};