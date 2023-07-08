import React from "react";
import _ from 'lodash';

import useCurrencies from "../../hooks/useCurrencies";
import { sortCurrencies,positiveNumber } from "../../utils";
import { MAX_DISPLAY_TOP_MOVERS } from "../../constants";
import TopMoversContent from "./TopMoversContent";

const TopMovers = () => {
  const currencies = useCurrencies();

  const topMoverCurrencies = React.useMemo(() => {
    if (currencies.length === 0) return [];
    
    const result = [];
    const currenciesDuplicate = _.cloneDeep(currencies);
    const data = sortCurrencies(currenciesDuplicate, 'day', 'desc');

    while(result.length < MAX_DISPLAY_TOP_MOVERS) {
      const data1 = data[0];
      const data2 = data[data.length - 1];

      if (positiveNumber(data1.price.day) >= positiveNumber(data2.price.day)) {
        result.push(data1);
        data.shift();
      } else {
        result.push(data2);
        data.pop();
      }
    }

    return result;
  }, [currencies]);

  return (
    <TopMoversContent topMoverCurrencies={topMoverCurrencies} />
  );
};

TopMovers.displayName = 'TopMoversComponent';

export default TopMovers;