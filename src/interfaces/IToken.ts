export interface IToken {
  id: number,
  username: string,
}

export interface ITokenData {
  data: {
    id: number,
    username: string,
    iat?: number,
    exp?: number,
  }
}