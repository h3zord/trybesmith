export interface IProduct {
  name: string;
  amount: string;
}

export interface IProductWithId extends IProduct {
  id: number;
}

export interface IProductWithOrderId extends IProductWithId {
  orderId: number;
}