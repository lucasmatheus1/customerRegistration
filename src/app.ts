import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/clients', async (req, res) => {
    let clients = await prisma.client.findMany(); // Espera a resolução da promessa
    res.json({
      message: "OK",
      data: clients
    });
});


app.use((req, res, next) => {
    res.status(404);
    return res.json({
      success: false,
      payload: null,
      message: `API SAYS: Endpoint not found for path: ${req.path}`,
    });
  });

  export default app;
