import express from 'express';
import { productController } from './products.controller';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.allProducts);
router.get('/:productId', productController.singleProduct);
router.put('/:productId', productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);

export const ProductRoutes = router;
