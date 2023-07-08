import React from 'react';

import { CurrencyWithPriceType, PriceKey } from '../../constants/types';
import { PRICE_TYPE } from '../../constants';
import useCurrencies from '../../hooks/useCurrencies';
import { numberToCurrency } from '../../utils';
import PercentageMove from '../PercentageMove';

const SelectTableHead = ({ setPriceType }: { setPriceType: (priceType: PriceKey) => void }) => (
  <select className='border rounded p-1 text-xs' onChange={(event) => setPriceType(event.target.value as PriceKey)}>
    {PRICE_TYPE.map((type) => (
      <option key={type.value} value={type.value}>{type.text}</option>
    ))}
  </select>
);

const TableHead = ({ setPriceType }: { setPriceType: (priceType: PriceKey) => void }) => (
  <thead>
    <tr>
      <th className='p-4 border-solid border-t w-screen text-sm font-medium'>
        <div className='flex justify-between items-center'>
          <span>Crypto</span>
          <div>
            <SelectTableHead setPriceType={setPriceType} />
          </div>
        </div>
      </th>
    </tr>
  </thead>
);

const TableData = ({ priceType, currencies }:  { priceType: PriceKey, currencies: CurrencyWithPriceType[] }) => {
  
  return (
    <tbody>
      {currencies.map(({ logo, name, currencySymbol, price }) => (
        <tr key={currencySymbol}>
          <td className='p-4 border-solid border-t w-screen text-sm font-medium'>
            <div className='flex justify-between items-center'>
              <div className="flex items-center">
                <img src={logo} height={32} width={32} className="mr-4" />
                <div className='flex flex-col'>
                  <span className='font-bold'>{name}</span>
                  <span className='text-gray-400'>{currencySymbol}</span>
                </div>
              </div>
              <div className='flex flex-col items-end'>
                <span className='font-bold'>{numberToCurrency(price.latestPrice)}</span>
                <PercentageMove value={price[priceType]} />
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const TableMobile = () => {
  const [priceType, setPriceType] = React.useState<PriceKey>('day');
  const currencies = useCurrencies();

  return (
    <div className='mt-2 md:hidden'>
      <table>
        <TableHead setPriceType={setPriceType} />
        <TableData currencies={currencies} priceType={priceType} />
      </table>
    </div>
  )
};

TableMobile.displayName = 'TableMobileComponent';

export default TableMobile;
