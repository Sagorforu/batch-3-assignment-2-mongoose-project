import { TProduct } from './products.interface';
import { Product } from './products.model';

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};
const getAllProductIntoDB = async () => {
  const result = await Product.find();
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductIntoDB,
};
