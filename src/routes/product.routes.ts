import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const router = Router();

const productController = new ProductController();

router.post('/', (req, res) => productController.create(req, res));

router.get('/', (req, res) => productController.getAll(req, res));

export default router;