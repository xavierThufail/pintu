import React from "react";

export type SubItemType = {
  title: string;
  subTitle: string;
};

export type ItemType = {
  title: string;
  subItems: SubItemType[];
};

export type HeaderProps = {
  list: ItemType[];
};

export type LogoProps = {
  href?: string;
};

export type ButtonProps = {
  onClick: () => void;
};

export type onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => void;

export type WalletType = {
  currencyGroup: string;
  tokenSymbol: string;
  decimal_point: number;
  tokenType: string;
  blockchain: string;
  explorer: string;
  listingDate: string;
  blockchainName: string;
  logo: string;
};

export type CurrencyType = {
  currencyGroup: string;
  color: string;
  currencySymbol: string;
  name: string;
  logo: string;
  decimal_point: number;
  listingDate: string;
  wallets: WalletType[];
};

export type PriceKey = 'pair' | 'latestPrice' | 'day' | 'week' | 'month' | 'year';

export type PriceType = {
  [key in PriceKey]: string;
};

export type CurrencyWithPriceType = CurrencyType & {
  price: PriceType;
};

export type PricesType = {
  [key: string]: PriceType;
}

export type CurrencyConfigType = {
  symbol: string;
  decimal: number;
}

export type CurrenciesConfigType = {
  [currency: string]: CurrencyConfigType;
};

export type FetchAPIType = <TResponse>(url: string, config?: RequestInit) => Promise<TResponse>;

export type FetchSuccessType = {
  code: string;
  message: string;
};

export type FetchPriceChangesResponse = FetchSuccessType & {
  code: string;
  message: string;
  payload: PriceType[]
};

export type FetchSupportedCurrenciesResponse = {
  code: string;
  message: string;
  payload: CurrencyType[]
};
