import express from 'express';
import { ordersController } from './orders.controller';

const router = express.Router();

router.post('/', ordersController.createOrder);
router.get('/', ordersController.allOrders);

export const OrderRoutes = router;
