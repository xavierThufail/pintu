import React from 'react';

import images, { CloseIcon } from '../../assets';
import { ButtonProps, onChangeInput } from '../../constants/types';

export type SearchFieldProps = {
  onClose?: () => void;
  autoFocus?: boolean;
};

export type SearchInputType = {
  autoFocus: SearchFieldProps['autoFocus'];
  value: string;
  onChange: onChangeInput;
};

const CloseButton = ({ onClick }: ButtonProps) => (
  <div className='cursor-pointer' onClick={onClick}>
    <CloseIcon />
  </div>
);

const SearchIcon = () => (
  <div className='cursor-pointer'>
    <img src={images.search} />
  </div>
);

const SearcInput = ({ autoFocus, value, onChange }: SearchInputType) => (
  <div className='flex w-full'>
    <input
      autoFocus={autoFocus}
      value={value}
      type='text'
      placeholder='Cari aset di Pintu...'
      className='bg-transparent focus:outline-0 pl-3 min-w-full'
      onChange={onChange}
    />
  </div>
);

const SearchField = ({ onClose, autoFocus }: SearchFieldProps) => {
  const [searchText, setSearchText] = React.useState<string>('');

  const handleInputChange: onChangeInput = ({ target: { value } }) => {
    setSearchText(value);
  };

  return (
    <React.Fragment>
      <div className='flex items-center items-center rounded-lg p-3 bg-zinc-100'>
        <SearchIcon />
        <SearcInput
          value={searchText}
          onChange={handleInputChange}
          autoFocus={autoFocus}
        />
        {onClose && <CloseButton onClick={onClose} />}
      </div>
    </React.Fragment>
  );
};

SearchField.displayName = 'SearchFieldComponent';

export default SearchField;
