import { IUsers, IUsersId } from '../interfaces/IUsers';
import UserModel from '../models/user.model';

export default class UserService {
  userModel = new UserModel();

  async create(payload: IUsers): Promise<IUsersId> {
    const result = await this.userModel.create(payload);
    return result;
  }
}