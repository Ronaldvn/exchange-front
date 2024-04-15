export interface User {
  id?: number;
  createdAt?: string;
  username: string;
  password: string;
}

export interface Exchange {
  id?: number;
  createdAt?: string;
  originCurrency: string;
  fateCurrency: string;
  amount: number;
  exchangeRate?: number;
  amountWithExchange?: number;
}
