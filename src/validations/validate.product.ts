import Joi from 'joi';
import { IProduct } from '../interfaces/IProduct';
import HttpException from '../utils/http.exception';

function validatePayloadProduct(payload: IProduct) {
  const scheman = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = scheman.validate(payload);

  if (error) {
    const { message } = error;
  
    if (message === '"name" is required' || message === '"amount" is required') {
      throw new HttpException(400, message);
    }

    throw new HttpException(422, message);
  }
}

export default validatePayloadProduct;