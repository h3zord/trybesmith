import { IProduct, IProductId, IProductOrderId } from '../interfaces/IProduct';
import ProductModel from '../models/product.model';
import validatePayloadProduct from '../validations/validate.product';

export default class ProductService {
  productModel = new ProductModel();

  async create(payload: IProduct): Promise<IProductId> {
    validatePayloadProduct(payload);

    const result = await this.productModel.create(payload);
    
    return result;
  }

  async getAll(): Promise<IProductOrderId[]> {
    const result = await this.productModel.getAll();

    return result;
  }
}