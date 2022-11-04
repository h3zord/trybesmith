import { ResultSetHeader } from 'mysql2';
import { IProducts, IProductsId } from '../interfaces/IProducts';
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
}