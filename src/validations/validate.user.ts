import Joi from 'joi';
import { IUser } from '../interfaces/IUser';
import HttpException from '../utils/http.exception';

export default function validatePayloadUser(payload: IUser) {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate(payload);

  if (error) {
    const isRequired = 'is required';

    const { message } = error;

    if (message.includes(isRequired)) throw new HttpException(400, message);

    throw new HttpException(422, message);
  }
}