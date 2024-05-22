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
        message: 'There is no product in database!!',
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
      success: true,
      message: 'Products could not fetched',
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
        message: 'Product does not exist in database',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Product could not fetched',
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
        message: 'Product does not exist in database',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Product could not update',
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
        message: 'Product does not exist in database',
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: true,
      message: 'Product could not fetched',
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
