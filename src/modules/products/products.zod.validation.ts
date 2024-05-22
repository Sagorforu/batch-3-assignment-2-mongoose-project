import { z } from 'zod';

const ProductVariantZodSchema = z.object({
  type: z.string().nonempty(),
  value: z.string().nonempty(),
});

const InventoryZodSchema = z.object({
  quantity: z.number().min(0),
  inStock: z.boolean(),
});

const productZodValidationSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  price: z.number().min(0),
  category: z.string().nonempty(),
  tags: z.array(z.string()).min(1),
  variants: z.array(ProductVariantZodSchema).min(2),
  inventory: InventoryZodSchema,
});

export default productZodValidationSchema;
