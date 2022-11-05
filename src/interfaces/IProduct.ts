export interface IProduct {
  name: string;
  amount: string;
}

export interface IProductId extends IProduct {
  id: number;
}

export interface IProductOrderId extends IProductId {
  orderId: number;
}