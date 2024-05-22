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
const searchProducts = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, 'i');
  const result = await Product.find({
    $or: [{ name: regex }, { description: regex }, { category: regex }],
  });
  return result;
};
const getSingleProductIntoDB = async (productId: string) => {
  const result = await Product.findOne({ _id: productId });
  return result;
};
const updateProductIntoDB = async (
  productId: string,
  updatedProduct: TProduct,
) => {
  const result = await Product.findByIdAndUpdate(
    { _id: productId },
    updatedProduct,
  );
  return result;
};
const deleteProductIntoDB = async (productId: string) => {
  const result = await Product.deleteOne({ _id: productId });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  updateProductIntoDB,
  deleteProductIntoDB,
  searchProducts,
};
