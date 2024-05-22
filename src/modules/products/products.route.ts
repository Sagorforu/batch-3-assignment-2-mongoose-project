import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.allProducts);

export const ProductRoutes = router;
