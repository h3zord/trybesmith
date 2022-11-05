import { IOrder } from '../interfaces/IOrder';
import OrderModel from '../models/order.model';

export default class OrderService {
  orderModel = new OrderModel();

  async getAll(): Promise<IOrder[]> {
    const result = await this.orderModel.getAll();

    return result; 
  }
}