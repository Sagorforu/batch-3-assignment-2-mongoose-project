import { Request, Response } from 'express';
import { orderServices } from './orders.services';
import orderZodValidationSchema from './orders.zod.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const orderZodParsedData = orderZodValidationSchema.parse(orderData);
    const result = await orderServices.createOderIntoDB(orderZodParsedData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Order not created!',
      error: error,
    });
  }
};
const allOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    let result;
    if (email) {
      result = await orderServices.searchOrdersByEmail(email as string);
    } else {
      result = await orderServices.getAllOrdersIntoDB();
    }
    if (result && result.length === 0) {
      res.status(404).json({
        success: false,
        message: 'Orders not found',
        data: null,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Orders fetched successfully!',
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Orders not fetched',
      error: error,
    });
  }
};

export const ordersController = {
  createOrder,
  allOrders,
};
