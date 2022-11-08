import { RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces/ILogin';
import { IUserWithId } from '../interfaces/IUser';
import connection from './connection';

export default class LoginModel {
  connection = connection;

  async findByUsername(payload: ILogin): Promise<IUserWithId> {
    const { username } = payload;
    const [[result]] = await this.connection.execute<IUserWithId[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [username],
    );

    return result;
  }
}