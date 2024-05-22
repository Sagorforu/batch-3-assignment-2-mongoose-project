import { TOrder } from './orders.interface';
import { OrderModel } from './orders.model';

const createOderIntoDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrdersIntoDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const searchOrdersByEmail = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const orderServices = {
  createOderIntoDB,
  getAllOrdersIntoDB,
  searchOrdersByEmail,
};
