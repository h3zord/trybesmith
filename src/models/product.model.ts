import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProduct, IProductId, IProductOrderId } from '../interfaces/IProduct';
import connection from './connection';

export default class ProductModel {
  connection = connection;

  async create(payload: IProduct): Promise<IProductId> {
    const { name, amount } = payload;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return { id: insertId, ...payload };
  }

  async getAll(): Promise<IProductOrderId[]> {
    const [result] = await this.connection.execute<IProductOrderId[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );

    return result;
  }
}