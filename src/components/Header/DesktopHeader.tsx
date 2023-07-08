import { LogoHeader } from './shared';

const DesktopHeader = () => {
  return (
    <div className='p-6 pt-8 hidden md:block'>
      <div className='flex justify-between'>
        <LogoHeader href='/' />
      </div>
    </div>
  )
};

DesktopHeader.displayName = 'DesktopHeaderComponent';

export default DesktopHeader;
