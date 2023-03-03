export interface IOrder {
  userId: number;
  productsIds: number[];
}

export interface IOrderWithId extends IOrder {
  id: number;
}

export interface IOrderOnlyPrdsIds {
  productsIds: number[]
}
