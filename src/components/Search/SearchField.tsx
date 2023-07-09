import React from 'react';

import images, { CloseIcon } from '../../assets';
import { ButtonProps, CurrencyWithPriceType, onChangeInput } from '../../constants/types';
import { useSearchContext } from '../../hooks/useSearch';
import useCurrencies from '../../hooks/useCurrencies';

export type SearchFieldProps = {
  onClose?: () => void;
  onFocus?: () => void;
  autoFocus?: boolean;
  disabled?: boolean;
  showCurrencies?: boolean;
  itemsContainerClassName?: string;
};

export type SearchInputType = {
  autoFocus: SearchFieldProps['autoFocus'];
  onFocus: SearchFieldProps['onFocus'];
  value: string;
  onChange: onChangeInput;
};

export type ItemProps = {
  icon: string;
  title: string;
  subTitle: string;
};

export type ListItemProps = {
  itemsContainerClassName: SearchFieldProps['itemsContainerClassName'];
  showCurrencies: SearchFieldProps['showCurrencies'];
  value: string;
  data: CurrencyWithPriceType[];
};

const CloseButton = ({ onClick }: ButtonProps) => (
  <div className='cursor-pointer' onClick={onClick}>
    <CloseIcon />
  </div>
);

const Item = ({ title, subTitle, icon }: ItemProps) => (
  <div className='flex justify-between items-center py-4 px-2'>
    <div className='flex'>
      <img src={icon} width={16} height={16} />
      <span className='pl-2 font-medium'>{title}</span>
    </div>
    <span>{subTitle}</span>
  </div>
);

const ListItem = ({ itemsContainerClassName, showCurrencies, value, data }: ListItemProps) => (
  <div className={itemsContainerClassName}>
    {!!showCurrencies && data.map(currency => (
      <Item key={currency.currencySymbol} icon={currency.logo} title={currency.name} subTitle={currency.currencySymbol} />
    ))}
    {!!showCurrencies && data.length === 0 && (
      <div className='flex flex-col pt-10 items-center w-full h-full text-sm'>
        <span className='font-bold'>{`"${value}" Tidak Ditemukan`}</span>
        <span className='text-gray-400'>Kata kunci tidak sesuai atau aset belum ada di Pintu</span>
      </div>
    )}
  </div>
);

const SearchIcon = () => (
  <div className='cursor-pointer'>
    <img src={images.search} />
  </div>
);

const SearcInput = ({ autoFocus, value, onChange, onFocus }: SearchInputType) => (
  <div className='flex w-full'>
    <input
      autoFocus={autoFocus}
      value={value}
      type='text'
      placeholder='Cari aset di Pintu...'
      className='bg-transparent focus:outline-0 pl-3 min-w-full'
      onChange={onChange}
      onFocus={onFocus}
    />
  </div>
);

const SearchField = ({
  onClose, onFocus, showCurrencies, itemsContainerClassName, disabled, autoFocus
}: SearchFieldProps) => {
  const {
    value,
    setValue
  } = useSearchContext();

  const currencies = useCurrencies();

  const filteredCurrencies = React.useMemo(() => {
    const valueLowerCase = value.toLowerCase();
    return currencies.filter((currency) =>
      currency.currencySymbol.toLowerCase().includes(valueLowerCase)
        || currency.name.toLowerCase().includes(valueLowerCase))
  }, [value, currencies]);

  const handleInputChange: onChangeInput = ({ target: { value } }) => {
    !disabled && setValue(value);
  };

  return (
    <React.Fragment>
      <div className='flex items-center items-center rounded-lg p-3 bg-zinc-100'>
        <SearchIcon />
        <SearcInput
          onFocus={onFocus}
          value={value}
          onChange={handleInputChange}
          autoFocus={autoFocus}
        />
        {onClose && <CloseButton onClick={onClose} />}
      </div>
      <ListItem
        value={value}
        data={filteredCurrencies}
        showCurrencies={showCurrencies}
        itemsContainerClassName={itemsContainerClassName}
      />
    </React.Fragment>
  );
};

SearchField.displayName = 'SearchFieldComponent';

export default SearchField;
