import images from '../../assets';
import SearchField from './SearchField';

import { ButtonProps } from '../../constants/types';
import { useSearchContext } from '../../hooks/useSearch';

const SearchIcon = ({ onClick }: ButtonProps) => (
  <div className='cursor-pointer' onClick={onClick}>
    <img src={images.search} />
  </div>
);

const MobileSearch = () => {
  const { isFocused, setIsFocused } = useSearchContext();

  const onClickSearchIcon = () => {
    setIsFocused(true);
  };

  const onClickCloseButton = () => {
    setIsFocused(false);
  };

  return (
    <div className='pt-8 relative md:hidden'>
      <div className='px-4 mb-6 flex justify-between items-center mx-auto'>
        <span className='font-bold text-lg'>Harga Crypto dalam Rupiah Hari Ini</span>
        <SearchIcon onClick={onClickSearchIcon} />
      </div>
      {isFocused && (
        <div className='px-4 md:hidden absolute top-0 z-1 w-screen min-h-screen bg-white mt-4'>
          <SearchField onClose={onClickCloseButton} showCurrencies autoFocus />
        </div>
      )}
    </div>
  )
};

MobileSearch.displayName = 'MobileSearchComponent';

export default MobileSearch;
