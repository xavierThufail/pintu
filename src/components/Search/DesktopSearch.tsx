import React from 'react';

import SearchField from './SearchField';
import useOutsideClick from '../../hooks/useCheckClick';

const DesktopSearch = () => {
  const [isFocus, setIsFocus] = React.useState(false);

  const searchRef = React.useRef(null);

  useOutsideClick(searchRef, () => setIsFocus(false));

  const handleFocus = () => {
    setIsFocus(!isFocus)
  };

  return (
    <div className='hidden md:block'>
      <div className='px-4 flex justify-between items-center mt-5 mb-8'>
        <span className='font-bold text-2xl'>Harga Crypto dalam Rupiah Hari Ini</span>
        <div className='w-96'>
          {isFocus && (
            <div ref={searchRef} className='border w-96 p-3 rounded-xl bg-white absolute'>
              <SearchField
                autoFocus
                onClose={handleFocus}
                showCurrencies
                itemsContainerClassName='h-80 flex flex-col overflow-scroll'
              />
            </div>
          )}
          <SearchField onFocus={handleFocus} disabled />
        </div>
      </div>
    </div>
  )
};

DesktopSearch.displayName = 'DesktopSearchComponent';

export default DesktopSearch;
