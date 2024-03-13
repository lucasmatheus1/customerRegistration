import { ClientModel } from '../models/client';
import { ModelContractModel } from '../models/modelContract';
import { DeliveryModel } from '../models/delivery';
import { ClientDataModel } from '../models/clientData';
import { SporadicProductModel } from '../models/sporadicProduct';
import { ClassicMonthlyFeeModel } from '../models/classicMonthlyFee';
import { OnDemandMonthlyFeeModel } from '../models/onDemandMonthlyFee';
import { ThirdPartyServicesModel } from '../models/thirdPartyServices';

import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
const prisma = new PrismaClient();

module.exports = {

  async find(req: Request, res: Response) {
    try {
      const clients = await ClientModel.find(req.query);
      res.status(200).json(clients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
  },

  async findById(req: Request, res: Response) {
    try {
      const client = await ClientModel.findById(req.params.id);
      if (!client) {
        res.status(404).json({ error: 'Client not found' });
        return;
      }
      res.status(200).json(client);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error while fetching clients' });
    }
  },

  async createClient(req: Request, res: Response) {
    try {
      const { client, ...relatedData } = req.body;

      // Cria o cliente
      const createdClient = await ClientModel.create(client.clientInfo);

      await Promise.all([
        ClientDataModel.create({ ...client.clientData, id_client: createdClient.id_client }),
        ...client.modelContracts.map((contract: any) => ModelContractModel.create({ ...contract, id_client: createdClient.id_client })),
        ...client.deliveries.map((delivery: any) => DeliveryModel.create({ ...delivery, id_client: createdClient.id_client })),
        ...client.sporadicProducts.map((product: any) => SporadicProductModel.create({ ...product, id_client: createdClient.id_client })),
        ...client.classicMonthlyFees.map((fee: any) => ClassicMonthlyFeeModel.create({ ...fee, id_client: createdClient.id_client })),
        ...client.onDemandMonthlyFees.map((fee: any) => OnDemandMonthlyFeeModel.create({ ...fee, id_client: createdClient.id_client })),
        ...client.thirdPartyServices.map((service: any) => ThirdPartyServicesModel.create({ ...service, id_client: createdClient.id_client })),
      ]);

      // Se existir um consultor, associe-o ao cliente
      if (client.consultant) {
        // Aqui você precisaria adicionar a lógica para criar ou encontrar o consultor no banco de dados
        // Em seguida, associar o consultor ao cliente e salvar as alterações
        // Por questões de simplicidade, assumirei que já existe um consultor com um ID conhecido
        const consultantId = "id_do_consultor"; // Substitua "id_do_consultor" pelo ID real do consultor
        await ClientModel.update(createdClient.id_client, { consultant_id: consultantId });
      }

      res.status(201).json({ success: true, message: 'Cliente criado com sucesso!', data: createdClient });
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      res.status(500).json({ error: 'Error while fetching clients' });
    }
  }

};
