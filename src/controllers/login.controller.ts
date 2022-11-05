import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import createToken from '../utils/token';

export default class LoginController {
  loginService = new LoginService();

  async validateLogin(req: Request, res: Response): Promise<void> {
    const payload = req.body;

    const result = await this.loginService.validateLogin(payload);

    const { id, username } = result;

    const token = createToken({ id, username });

    res.status(200).json({ token });
  }
}