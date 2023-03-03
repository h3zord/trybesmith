import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrderWithId } from '../interfaces/IOrder';
import connection from './connection';

export default class OrderModel {
  connection = connection;

  async getAll(): Promise<IOrderWithId[]> {
    const [result] = await this.connection.execute<IOrderWithId[] & RowDataPacket[]>(
      `SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds 
      FROM Orders AS orders
      INNER JOIN Products AS products
      ON orders.id = products.orderId
      GROUP BY orders.id`,
    );

    return result;
  }

  async create(payload: number): Promise<number> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Orders (userId) VALUES (?)',
      [payload],
    );

    return insertId;
  }
}
