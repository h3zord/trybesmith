import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  orderService = new OrderService();

  async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.orderService.getAll();

    res.status(200).json(result);
  }

  async create(req: Request, res: Response): Promise<void> {
    const { productsIds } = req.body;
    const { authorization: token } = req.headers;
    
    const result = await this.orderService.create(productsIds, token);

    res.status(201).json(result);
  }
}