import React from "react";

import {  numberToCurrency } from "../../utils";
import { CurrencyWithPriceType } from "../../constants/types";
import PercentageMove from "../PercentageMove";

type TopMoversContentProps = {
  topMoverCurrencies: CurrencyWithPriceType[]
};

const ItemTitle = ({ logo, name }: CurrencyWithPriceType) => (
  <div className="flex items-center">
    <img src={logo} height={32} width={32} className="mr-2" />
    <div className='font-bold text-ellipsis overflow-hidden'>
      <span>{name}</span>
    </div>
  </div>
);

const ItemPrice = ({ price }: CurrencyWithPriceType) => (
  <React.Fragment>
    <div className="mt-1">
      <span className="text-gray-400">{numberToCurrency(price.latestPrice)}</span>
    </div>
    <PercentageMove value={price.day} />
  </React.Fragment>
);

const Item = (currency: CurrencyWithPriceType) => (
  <div className="p-4 min-w-max md:min-w-0">
    <ItemTitle {...currency} />
    <ItemPrice {...currency} />
  </div>
);

const Content = ({ topMoverCurrencies }: TopMoversContentProps) => (
  <div className="px-4 flex justify-between overflow-scroll">
    {topMoverCurrencies.map((currency) => (
      <Item key={currency.currencySymbol} {...currency} />
    ))}
  </div>
);

const Title = () => (
  <div className="mb-2 px-4">
    <span className='font-bold'>🔥 Top Movers (24 Jam)</span>
  </div>
);

const TopMoversContent = ({ topMoverCurrencies }: TopMoversContentProps) => {

  return (
    <div className="text-lg md:text-xl">
      <Title />
      <Content topMoverCurrencies={topMoverCurrencies} />
    </div>
  );
};

TopMoversContent.displayName = 'TopMoversContent';

export default TopMoversContent;