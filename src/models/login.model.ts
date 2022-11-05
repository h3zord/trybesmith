import { RowDataPacket } from 'mysql2';
import { ILogin } from '../interfaces/ILogin';
import { IUserId } from '../interfaces/IUser';
import connection from './connection';

export default class LoginModel {
  connection = connection;

  async findByUsername(payload: ILogin): Promise<IUserId> {
    const { username } = payload;
    const [[result]] = await this.connection.execute<IUserId[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [username],
    );

    return result;
  }
}