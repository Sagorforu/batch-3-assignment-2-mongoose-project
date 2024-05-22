import { Schema, model } from 'mongoose';
import { TOrder } from './orders.interface';

const OrderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const OrderModel = model<TOrder>('Order', OrderSchema);