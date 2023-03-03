import { Request, Response } from 'express';
import UserService from '../services/user.service';
import createToken from '../utils/token';

export default class UserController {
  userService = new UserService();

  async create(req: Request, res: Response): Promise<void> {
    const payload = req.body;

    const result = await this.userService.create(payload);
    
    if (result) {
      const { id, username } = result;
      const token = createToken({ id, username });
      
      res.status(201).json({ token });
    }
  }
}