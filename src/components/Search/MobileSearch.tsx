import images from '../../assets';

const SearchIcon = () => (
  <div className='cursor-pointer'>
    <img src={images.search} />
  </div>
);

const MobileSearch = () => {
  return (
    <div className='pt-8 relative md:hidden'>
      <div className='px-4 mb-6 flex justify-between items-center mx-auto'>
        <span className='font-bold text-lg'>Harga Crypto dalam Rupiah Hari Ini</span>
        <SearchIcon />
      </div>
    </div>
  )
};

MobileSearch.displayName = 'MobileSearchComponent';

export default MobileSearch;
