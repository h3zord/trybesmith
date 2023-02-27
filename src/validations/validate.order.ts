import Joi from 'joi';
import HttpException from '../utils/http.exception';

export default function validatePayloadOrder(payload: number[]) {
  const schema = Joi.array().items(Joi.number()).required();

  const { error } = schema.validate(payload);
  
  if (error) {
    const isRequired = 'is required';

    const { message } = error;

    if (message.includes(isRequired)) throw new HttpException(400, 'All fields must be filled');

    throw new HttpException(422, 'Check that the information is filled in correctly');
  }
  
  if (!payload.length) {
    throw new HttpException(422, 'Check that the information is filled in correctly');
  }
}