import React from 'react';

import images, { CloseIcon, DirectionIcon } from '../../assets';
import { ItemType, ButtonProps } from '../../constants/types';
import { listMenu } from '../../constants';
import { LogoHeader, MenuSubItemContent } from './shared';

const CloseButton = ({ onClick }: ButtonProps) => (
  <div className='cursor-pointer' onClick={onClick}>
    <CloseIcon />
  </div>
);

const BurgerIcon = ({ onClick }: ButtonProps) => (
  <div className='cursor-pointer' onClick={onClick}>
    <img src={images.burger} />
  </div>
);

const Divider = () => (
  <div className='h-px w-screen bg-slate-100' />
);

const MenuItem = ({ title, subItems }: ItemType) => {
  const [active, setActive] = React.useState<boolean>(false);

  const onClickItem = () => {
    setActive(!active);
  };

  return (
    <div>
      <Divider/>
      <div
        className={`p-4 flex justify-between cursor-pointer items-center ${active ? 'text-sky-600 font-bold' : ''}`}
        onClick={onClickItem}
      >
        <span>{title}</span>
        {subItems.length > 0 && <DirectionIcon height={10} width={18} direction={active ? 'DOWN' : 'UP'}/>}
      </div>
      {active && subItems.length > 0 && subItems.map((subItem, i) => (
        <div key={subItem.title + i} className='flex items-start cursor-pointer'>
          <MenuSubItemContent title={subItem.title} subTitle={subItem.subTitle} />
        </div>
      ))}
    </div>
  )
};

const Menu = ({ onClick }: ButtonProps) => (
  <div className='md:hidden animate-scroll absolute top-0 right-0 z-1 w-screen h-screen bg-white'>
    <div className='px-4 py-8 flex justify-between'>
      <LogoHeader />
      <CloseButton onClick={onClick} />
    </div>
    {listMenu.map(({ title, subItems }) => {
      return (
        <MenuItem key={title} title={title} subItems={subItems} />
      )
    })}
  </div>
);

const MobileHeader = () => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const onClickBurgerIcon = () => {
    setShowMenu(true);
  };

  const onClickCloseButton = () => {
    setShowMenu(false);
  };

  return (
    <div className='relative z-10'>
      <div className='p-4 md:hidden flex justify-between items-center max-w-screen-sm mx-auto'>
        <LogoHeader />
        <BurgerIcon onClick={onClickBurgerIcon} />
      </div>
      {showMenu && <Menu onClick={onClickCloseButton} />}
    </div>
  )
};

MobileHeader.displayName = 'MobileHeaderComponent';

export default MobileHeader;
