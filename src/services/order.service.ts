import { IOrders } from '../interfaces/IOrders';
import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel = new OrderModel();

  async getAll(): Promise<IOrders[]> {
    const result = await this.orderModel.getAll();
    return result; 
  }
}