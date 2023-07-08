import React from 'react';

import SearchField from './SearchField';

const DesktopSearch = () => {
  const [isFocus, setIsFocus] = React.useState(false);

  const handleFocus = () => {
    setIsFocus(!isFocus)
  };

  return (
    <div className='hidden md:block'>
      <div className='px-4 flex justify-between items-center mt-5 mb-8'>
        <span className='font-bold text-2xl'>Harga Crypto dalam Rupiah Hari Ini</span>
        <div className='w-96'>
          <SearchField onFocus={handleFocus} disabled />
        </div>
      </div>
    </div>
  )
};

DesktopSearch.displayName = 'DesktopSearchComponent';

export default DesktopSearch;
