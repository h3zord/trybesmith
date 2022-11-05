import jwt from 'jsonwebtoken';
import { IUsers } from '../interfaces/IUsers';

export default function createToken(data: IUsers) {
  const token = jwt.sign({ data }, process.env.JWT_SECRET as string, {
    expiresIn: '1d',
    algorithm: 'HS256', 
  });

  return token;
}

// export const validateToken = (token: string) => {
//   if (!token) {
//     const e = new Error('Token obrigatório!');
//     e.message = 'Token not found';
//     e.status = 401;
//     throw e;
//   }

//   try {
//     const { data } = jwt.verify(token, process.env.JWT_SECRET as string);
//     return data;
//   } catch (error) {
//     const e = new Error('Token inválido');
//     e.message = 'Expired or invalid token';
//     e.status = 401;
//     throw e;
//   }
// };