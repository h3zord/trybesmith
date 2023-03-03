import { IUser, IUserWithId } from '../interfaces/IUser';
import UserModel from '../models/user.model';
import validatePayloadUser from '../validations/validate.user';

export default class UserService {
  userModel = new UserModel();

  async create(payload: IUser): Promise<IUserWithId> {
    validatePayloadUser(payload);

    const result = await this.userModel.create(payload);
    
    return result;
  }
}