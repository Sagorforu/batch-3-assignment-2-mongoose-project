import { z } from 'zod';

const orderZodValidationSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  productId: z.string().min(1, { message: 'Product ID is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  quantity: z.number().min(1, { message: 'Quantity must be at least 1' }),
});

export default orderZodValidationSchema;
