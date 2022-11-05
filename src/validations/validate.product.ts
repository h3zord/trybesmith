import Joi from 'joi';
import { IProduct } from '../interfaces/IProduct';
import HttpException from '../utils/http.exception';

export default function validatePayloadProduct(payload: IProduct) {
  const scheman = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = scheman.validate(payload);

  if (error) {
    const isRequired = 'is required';
  
    const { message } = error;
  
    if (message.includes(isRequired)) throw new HttpException(400, message);

    throw new HttpException(422, message);
  }
}