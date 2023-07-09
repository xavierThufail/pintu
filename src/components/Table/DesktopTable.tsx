import React from 'react';
import _ from 'lodash';

import { CurrencyWithPriceType, DirectionType, PriceKey, PriceTypeSort } from '../../constants/types';
import { PRICE_TYPE, stepDirection } from '../../constants';
import useCurrencies from '../../hooks/useCurrencies';
import { numberToCurrency, sortCurrencies } from '../../utils';
import PercentageMove from '../PercentageMove';
import { SortableIcon } from '../../assets';

type TableHeadProps = {
  sortBy?: PriceKey;
  direction?: DirectionType;
  handleChangeSort: (sortBy?: PriceKey) => () => void;
};

type TableDataItemProps = CurrencyWithPriceType & {
  type: PriceKey
};

type TableDataColProps = {
  type: PriceKey
  currency: CurrencyWithPriceType;
};

type TableHeadPriceSortProps = TableHeadProps & PriceTypeSort

const TableHeadCrypto = () => (
  <th className='p-3 font-semibold text-left text-gray-400'>
    <div className='flex'>
      <div className='py-3 px-6'/>
      <span>Crypto</span>
    </div>
  </th>
);

const TableHeadPriceSort = ({ sortBy, direction, text, value, handleChangeSort }: TableHeadPriceSortProps) => (
  <th onClick={handleChangeSort(value)} className='p-3 font-semibold text-left text-gray-400'>
    <div className='flex items-center'>
      <span className='mr-3'>{text}</span>
      <SortableIcon active={sortBy === value ? direction : undefined} />
    </div>
  </th>
);

const TableHead = (props: TableHeadProps) => (
  <thead>
    <tr>
      <TableHeadCrypto />
      {PRICE_TYPE.map((price) => (
        <TableHeadPriceSort key={price.value} {...props} {...price} />
      ))}
    </tr>
  </thead>
);

const TableDataCrypto = ({ logo, name, currencySymbol }: TableDataItemProps) => (
  <div className='flex items-center'>
    <img src={logo} height={32} width={32} className="mr-4" />
    <div className='flex items-center justify-between w-full flex-wrap'>
      <span className='font-bold'>{name}</span>
      <span className='text-gray-400'>{currencySymbol}</span>
    </div>
  </div>
);

const TableDataPriceSort = ({ price, type }: TableDataItemProps) => (
  <PercentageMove value={price[type as PriceKey]} />
);

const TableDataPrice = ({ price }: TableDataItemProps) => (
  <span className='font-bold'>{numberToCurrency(price.latestPrice)}</span>
);

const generateContent = (type: PriceKey) => {
  if (type === 'pair') {
    return TableDataCrypto;
  }

  if (type === 'latestPrice') {
    return TableDataPrice;
  }

  return TableDataPriceSort;
};

const TableDataCol = ({ type, currency }: TableDataColProps) => {
  const Content = generateContent(type);

  return (
    <td className='p-3 border-solid border-t font-medium'>
      <Content {...currency} type={type} />
    </td>
  )
};

const TableData = ({ currencies }:  { currencies: CurrencyWithPriceType[] }) => (
  <tbody>
    {currencies.map((currency) => (
      <tr key={currency.currencySymbol}>
        <TableDataCol type='pair' currency={currency} />
        {PRICE_TYPE.map(({ value }) => (
          <TableDataCol key={value} type={value} currency={currency} />
        ))}
      </tr>
    ))}
  </tbody>
);

const DesktopTable = () => {
  const [sortBy, setSortBy] = React.useState<PriceKey>();
  const [direction, setDirection] = React.useState<DirectionType>();

  const currencies = useCurrencies();

  const sortedCurrencies = React.useMemo(() => {
    if (!direction || !sortBy) return currencies;
  
    const currenciesDuplicate = _.cloneDeep(currencies);

    return sortCurrencies(currenciesDuplicate, sortBy, direction);
  }, [currencies, sortBy, direction]);

  const handleChangeSort = (sortByValue: PriceKey | undefined) => () => {
    const directionIndex = stepDirection.findIndex((dir) => dir === direction && sortBy === sortByValue);
    const nextDirection = stepDirection[directionIndex + 1];

    setDirection(nextDirection);
    setSortBy(sortByValue);
  };

  return (
    <div className='mt-2 mx-4 rounded-lg border border-solid hidden md:block'>
      <table className='w-full'>
        <TableHead sortBy={sortBy} direction={direction} handleChangeSort={handleChangeSort} />
        <TableData currencies={sortedCurrencies} />
      </table>
    </div>
  )
};

DesktopTable.displayName = 'DesktopTableComponent';

export default DesktopTable;
