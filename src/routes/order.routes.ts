import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import tokenMiddleware from '../middlewares/token.middleware';

const orderController = new OrderController();

const router = Router();

router.get('/', (req, res) => orderController.getAll(req, res));

router.use(tokenMiddleware);

router.post('/', (req, res) => orderController.create(req, res));

export default router;