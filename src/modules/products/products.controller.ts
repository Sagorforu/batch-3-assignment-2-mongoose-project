import { Request, Response } from 'express';
import { productServices } from './products.services';

const createProduct = async (req: Request, res: Response) => {
  const productBody = req.body;
  const result = await productServices.createProductIntoDB(productBody);
  res.json({
    success: true,
    message: 'Product created successfully!',
    data: result,
  });
};

export const productController = {
  createProduct,
};
