import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct, IProductWithId, IProductWithOrderId } from '../interfaces/IProduct';
import connection from './connection';

export default class ProductModel {
  connection = connection;

  async create(payload: IProduct): Promise<IProductWithId> {
    const { name, amount } = payload;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...payload };
  }

  async getAll(): Promise<IProductWithOrderId[]> {
    const [result] = await this.connection.execute<IProductWithOrderId[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );

    return result;
  }

  async updateById(id: number, userId: number): Promise<void> {
    await this.connection.execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
      [userId, id],
    );
  }
}