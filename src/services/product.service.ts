import { IProducts, IProductsId, IProductsOrderId } from '../interfaces/IProducts';
import ProductModel from '../models/product.model';

export default class ProductService {
  productModel = new ProductModel();

  async create(payload: IProducts): Promise<IProductsId> {
    const result = await this.productModel.create(payload);
    return result;
  }

  async getAll(): Promise<IProductsOrderId[]> {
    const result = await this.productModel.getAll();
    return result;
  }
}