import LoginModel from '../models/login.model';
import { validateUserAndPass, validatePayloadLogin } from '../validations/validate.login';
import { IUserWithId } from '../interfaces/IUser';
import { ILogin } from '../interfaces/ILogin';

export default class LoginService {
  loginModel = new LoginModel();

  async validateLogin(payload: ILogin): Promise<IUserWithId> {
    validatePayloadLogin(payload);

    const result = await this.loginModel.findByUsername(payload);

    validateUserAndPass(payload, result);
    
    return result;
  }
}