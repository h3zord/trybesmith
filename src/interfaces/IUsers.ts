export interface IUsers {
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface IUsersId extends IUsers {
  id: number;
}