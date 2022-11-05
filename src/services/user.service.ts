import { IUser, IUserId } from '../interfaces/IUser';
import UserModel from '../models/user.model';

export default class UserService {
  userModel = new UserModel();

  async create(payload: IUser): Promise<IUserId> {
    return this.userModel.create(payload);
  }
}