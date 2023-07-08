import React from 'react';

import { CurrencyWithPriceType } from '../constants/types';

export const CurrenciesContext = React.createContext<CurrencyWithPriceType[]>([]);

const useCurrencies = () => {
  const currencies = React.useContext(CurrenciesContext);

  return currencies;
};

export default useCurrencies;
