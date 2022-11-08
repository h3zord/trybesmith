import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../utils/token';

export default function tokenMiddleware(req: Request, _res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;
  
  validateToken(token);
  
  next();
} 