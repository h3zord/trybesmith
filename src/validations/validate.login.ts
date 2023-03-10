import Joi from 'joi';
import HttpException from '../utils/http.exception';
import { ILogin } from '../interfaces/ILogin';
import { IUserWithId } from '../interfaces/IUser';

export function validatePayloadLogin(payload: ILogin) {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(payload);

  if (error) throw new HttpException(400, 'Username or password are missing');
}

export function validateUserAndPass(payload: ILogin, result: IUserWithId) {
  const errorMessage = 'Username or password invalid';

  if (!result) throw new HttpException(401, errorMessage);

  const { username: payloadUserName, password: payloadPassword } = payload;
  const { username: resultUserName, password: resultPassword } = result;

  if (payloadPassword !== resultPassword) throw new HttpException(401, errorMessage);
  if (payloadUserName !== resultUserName) throw new HttpException(401, errorMessage);
}