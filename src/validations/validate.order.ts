import Joi from 'joi';
import HttpException from '../utils/http.exception';

export default function validatePayloadOrder(payload: number[]) {
  const schema = Joi.array().items(Joi.number()).required();

  const { error } = schema.validate(payload);
  
  if (error) {
    const isRequired = 'is required';

    const { message } = error;

    if (message.includes(isRequired)) throw new HttpException(400, '"productsIds" is required');

    throw new HttpException(422, '"productsIds" must be an array');
  }

  if (!payload.length) {
    throw new HttpException(422, '"productsIds" must include only numbers');
  }
}