import { LogoHeader } from './shared';

const MobileHeader = () => {
  return (
    <div className='relative z-10'>
      <div className='p-4 md:hidden flex justify-between items-center max-w-screen-sm mx-auto'>
        <LogoHeader />
      </div>
    </div>
  )
};

MobileHeader.displayName = 'MobileHeaderComponent';

export default MobileHeader;
