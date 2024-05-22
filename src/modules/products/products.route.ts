import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.allProducts);
router.get('/:productId', productController.singleProduct);

export const ProductRoutes = router;
