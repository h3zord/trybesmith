import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/IOrder';
import connection from './connection';

export default class OrderModel {
  connection = connection;

  async getAll(): Promise<IOrder[]> {
    const [result] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds 
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS products
      ON orders.id = products.orderId
      GROUP BY orders.id`,
    );

    return result;
  }
}