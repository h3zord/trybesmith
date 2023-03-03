import jwt from 'jsonwebtoken';
import { ITokenData, IToken } from '../interfaces/IToken';
import HttpException from './http.exception';

export default function createToken(data: IToken): string {
  const token = jwt.sign({ data }, process.env.JWT_SECRET || 'secret' as string, {
    expiresIn: '9999d',
    algorithm: 'HS256', 
  });

  return token;
}

export const validateToken = (token: string | undefined) => {  
  if (!token) {
    throw new HttpException(404, 'Token not found');
  }

  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET || 'secret' as string) as ITokenData;
    
    return data;
  } catch (error) {
    throw new HttpException(401, 'Invalid token');
  }
};