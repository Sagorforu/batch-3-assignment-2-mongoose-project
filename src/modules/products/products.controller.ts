import { Request, Response } from 'express';
import { productServices } from './products.services';
import productZodValidationSchema from './products.zod.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productBody = req.body;
    const zodParsedData = productZodValidationSchema.parse(productBody);
    const result = await productServices.createProductIntoDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product not created!',
      error: error,
    });
  }
};
const allProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    let result;

    if (searchTerm) {
      result = await productServices.searchProducts(searchTerm);
    } else {
      result = await productServices.getAllProductIntoDB();
    }
    if (result && result.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Products not found',
        data: null,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Products not fetched',
      error: error,
    });
  }
};
const singleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductIntoDB(productId);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product fetched successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'product not found',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product not found',
      error: error,
    });
  }
};
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedProductData = req.body;
    const result = await productServices.updateProductIntoDB(
      productId,
      updatedProductData,
    );
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product not found',
      error: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductIntoDB(productId);
    if (result) {
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
        data: null,
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'Product not found',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Product not found',
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  allProducts,
  singleProduct,
  updateProduct,
  deleteProduct,
};
