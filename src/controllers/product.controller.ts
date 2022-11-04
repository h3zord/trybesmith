import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  productService = new ProductService();

  async create(req: Request, res: Response): Promise<void> {
    const payload = req.body;

    const newProduct = await this.productService.create(payload);
    res.status(201).json(newProduct);
  }
}