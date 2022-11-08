import { IOrder, IOrderWithId } from '../interfaces/IOrder';
import OrderModel from '../models/order.model';
import validatePayloadOrder from '../validations/validate.order';
import { validateToken } from '../utils/token';
import ProductModel from '../models/product.model';

export default class OrderService {
  orderModel = new OrderModel();

  productModel = new ProductModel();

  async getAll(): Promise<IOrderWithId[]> {
    const result = await this.orderModel.getAll();

    return result; 
  }

  async create(payload: number[], token: string | undefined): Promise<IOrder> {
    validatePayloadOrder(payload);

    const { id: userId } = validateToken(token);

    const insertId = await this.orderModel.create(userId);

    const updatedProducts = payload.map(async (id) => {
      await this.productModel.updateById(id, insertId);
    });

    await Promise.all(updatedProducts);

    return { userId, productsIds: payload };
  }
}