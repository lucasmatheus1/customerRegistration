import { PrismaClient } from '@prisma/client'
import express from 'express'
import clientRoutes from './routes/clientRoutes';

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use('/client', clientRoutes);

app.use((req, res, next) => {
    res.status(404);
    return res.json({
      success: false,
      payload: null,
      message: `API SAYS: Endpoint not found for path: ${req.path}`,
    });
  });

  export default app;
