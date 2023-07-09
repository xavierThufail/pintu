import React from 'react';
import { useQuery } from '@tanstack/react-query';

import {
  PricesType,
  CurrencyWithPriceType,
  FetchPriceChangesResponse,
  FetchSupportedCurrenciesResponse
} from '../../constants/types';
import { fetchAPI } from '../../utils';

const useHomepage = () => {
  const [currenciesWithPrice, setCurrenciesWithPrice] = React.useState<CurrencyWithPriceType[]>([]);

  const { data: currencies, error: currenciesError, isLoading: currenciesLoading } = useQuery({
    queryKey: ['currencies'],
    queryFn: async () =>
      await fetchAPI<FetchSupportedCurrenciesResponse>('https://pintu-proxy.vercel.app/supported-currencies'),
  });

  const { data: prices, error: pricesError, isLoading: pricesLoading } = useQuery({
    queryKey: ['prices'],
    queryFn: async () => {
      const data = await fetchAPI<FetchPriceChangesResponse>('https://pintu-proxy.vercel.app/price-changes');

      return data.payload.reduce((result, value) => {
        const symbol = value.pair.split('/')[0].toUpperCase() as string;
        result[symbol] = value;
        return result;
      }, {} as PricesType);
    },
    refetchInterval: 1000
  });

  React.useEffect(() => {
    if (prices && currencies) {
      setCurrenciesWithPrice(currencies.payload.slice(1).map((currency) => ({
        ...currency,
        price: prices[currency.currencySymbol]
      })));
    }
  }, [currencies, prices]);
  
  return {
    currencies: currenciesWithPrice,
    error: pricesError || currenciesError,
    isLoading: currenciesLoading || pricesLoading
  }
};

export default useHomepage;
