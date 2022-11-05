import { ILogin } from '../interfaces/ILogin';
import LoginModel from '../models/login.model';
import { validateUserAndPass, validatePayloadLogin } from '../validations/validate.login';

export default class LoginService {
  loginModel = new LoginModel();

  async validateLogin(payload: ILogin) {
    validatePayloadLogin(payload);

    const result = await this.loginModel.findByUsername(payload);

    validateUserAndPass(payload, result);

    return result;
  }
}