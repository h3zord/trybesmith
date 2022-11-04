import { Router } from 'express';
import ProductController from '../controllers/product.controller';

const productController = new ProductController();

const router = Router();

router.post('/', (req, res) => productController.create(req, res));

router.get('/', (req, res) => productController.getAll(req, res));

export default router;