import { IProducts, IProductsId } from '../interfaces/IProducts';
import ProductModel from '../models/product.model';

export default class ProductService {
  productModel = new ProductModel();

  async create(payload: IProducts): Promise<IProductsId> {
    return this.productModel.create(payload);
  }
}