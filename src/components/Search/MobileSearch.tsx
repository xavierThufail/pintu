import React from 'react';

import images from '../../assets';
import SearchField from './SearchField';

import { ButtonProps } from '../../constants/types';

const SearchIcon = ({ onClick }: ButtonProps) => (
  <div className='cursor-pointer' onClick={onClick}>
    <img src={images.search} />
  </div>
);

const MobileSearch = () => {
  const [isHidden, setIsHidden] = React.useState<boolean>(true);

  const onClickSearchIcon = () => {
    setIsHidden(false);
  };

  const onClickCloseButton = () => {
    setIsHidden(true);
  };

  return (
    <div className='pt-8 relative md:hidden'>
      <div className='px-4 mb-6 flex justify-between items-center mx-auto'>
        <span className='font-bold text-lg'>Harga Crypto dalam Rupiah Hari Ini</span>
        <SearchIcon onClick={onClickSearchIcon} />
      </div>
      {!isHidden && (
        <div className='px-4 md:hidden absolute top-0 z-1 w-screen h-screen bg-white mt-4'>
          <SearchField onClose={onClickCloseButton} showCurrencies autoFocus />
        </div>
      )}
    </div>
  )
};

MobileSearch.displayName = 'MobileSearchComponent';

export default MobileSearch;
