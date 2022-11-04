import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IProducts, IProductsId, IProductsOrderId } from '../interfaces/IProducts';
import connection from './connection';

export default class ProductModel {
  connection = connection;

  async create(payload: IProducts): Promise<IProductsId> {
    const { name, amount } = payload;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...payload };
  }

  async getAll(): Promise<IProductsOrderId[]> {
    const [result] = await this.connection.execute<IProductsOrderId[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return result;
  }
}