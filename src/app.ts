import express, { Request, Response } from 'express';
import { ProductRoutes } from './modules/products/products.route';
const app = express();

//!parsers
app.use(express.json());

app.use('/api/products', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('This is project mongoose - assignment 2');
});

export default app;
