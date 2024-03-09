import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient();
import clientModel from '../models/client';

module.exports = {
  async create(req:Request, res:Response) {
    try {
      const client = await clientModel.create(req.body);
      res.status(201).json(client);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar cliente' });
    }
  },

  async find(req:Request, res:Response) {
    try {
      const clients = await clientModel.find(req.query);
      res.status(200).json(clients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
  },

  async findById(req:Request, res:Response) {
    try {
      const client = await clientModel.findById(req.params.id);
      if (!client) {
        res.status(404).json({ error: 'Client not found' });
        return;
      }
      res.status(200).json(client);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error while fetching clients' });
    }
  }
};
