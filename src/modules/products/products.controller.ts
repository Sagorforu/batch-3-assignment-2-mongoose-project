import { Request, Response } from 'express';
import { productServices } from './products.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productBody = req.body;
    const result = await productServices.createProductIntoDB(productBody);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Product could not created!',
      error: error,
    });
  }
};
const allProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductIntoDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Products could not fetched',
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  allProducts,
};
