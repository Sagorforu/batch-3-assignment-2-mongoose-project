import express, { Application, Request, Response } from 'express';
import { ProductRoutes } from './modules/products/products.route';
import { OrderRoutes } from './modules/orders/orders.route';
import cors from 'cors';
const app: Application = express();

//!parsers
app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('This is project mongoose - assignment 2');
});

export default app;
