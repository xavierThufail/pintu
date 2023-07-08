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
