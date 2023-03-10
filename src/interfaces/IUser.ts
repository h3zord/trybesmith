export interface IUser {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUserWithId extends IUser {
  id: number
}
