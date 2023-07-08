import { CurrencyWithPriceType, FetchAPIType, PriceKey } from "../constants/types";
import { currenciesConfig } from "../constants";

export const fetchAPI: FetchAPIType = async (url, config) => {
  const response = await fetch(url, config);

  return await response.json();
};

type SortCurrencies = (
  currencies: CurrencyWithPriceType[],
  sortBy: PriceKey,
  direction: 'asc' | 'desc'
) => CurrencyWithPriceType[];

export const sortCurrencies: SortCurrencies = (currencies, sortBy, direction = 'asc') => {
  if (sortBy === 'pair') return currencies;

  return currencies.sort((value, nextValue) => {
    const data1 = +value.price[sortBy];
    const data2 = +nextValue.price[sortBy];

    if (data1 === data2) return 0;

    if (direction === 'desc') {
      return data1 > data2 ? -1 : 1;
    }

    return data1 < data2 ? -1 : 1;
  })
};

export const positiveNumber = (value: string): number => {
  const valueNumber = +value;

  if (valueNumber >= 0) return valueNumber;

  return valueNumber * -1
};

export const numberToCurrency = (nominal: string, currency = 'idr') => {
  const dataCurrency = currenciesConfig[currency];
  let amount = '';

  for (let i = 1; i <= nominal.length; i++) {
    amount = nominal[nominal.length - i] + amount;

    if (i % dataCurrency.decimal === 0 && i !== nominal.length) {
      amount = '.' + amount;
    }
  }

  return dataCurrency.symbol + amount;
};
