import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const ModelContractModel = {
    async create(data: any) {
      return await prisma.modelContract.create({
        data,
      });
    },
  
    async find(where: any) {
      return await prisma.modelContract.findMany({
        where,
      });
    },
  
    async findById(id: string) {
      return await prisma.modelContract.findUnique({
        where: {
          id: id,
        },
      });
    },
  
    async update(id: string, data: any) {
      return await prisma.modelContract.update({
        where: {
          id: id,
        },
        data,
      });
    },
  
    async delete(id: string) {
      return await prisma.modelContract.delete({
        where: {
          id: id,
        },
      });
    },
  };