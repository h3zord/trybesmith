import { ResultSetHeader } from 'mysql2';
import { IUsers, IUsersId } from '../interfaces/IUsers';
import connection from './connection';

export default class UserModel {
  connection = connection;

  async create(payload: IUsers): Promise<IUsersId> {
    const { username, classe, level, password } = payload;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id: insertId, ...payload };
  }
}