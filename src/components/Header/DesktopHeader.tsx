import React from 'react';

import images, { DirectionIcon } from '../../assets';
import { HeaderProps, ButtonProps, SubItemType, ItemType } from '../../constants/types';
import { listMenu } from '../../constants';
import { LogoHeader, MenuSubItemContent} from './shared';

type LanguageButtonProps = ButtonProps & {
  active: boolean;
  item: ItemType;
};

type MenuItemProps = ButtonProps & {
  active: boolean;
  item: ItemType;
  justifyEnd: boolean;
};

type MenuProps = HeaderProps & {
  handleClickItem: (id: number) => () => void;
  activeId: number;
};

type MenuSubItemProps =  {
  title?: string;
  subItems: SubItemType[];
  justifyEnd: boolean;
};

const MenuSubItem = ({ title, subItems, justifyEnd }: MenuSubItemProps) => (
  <div className={`${justifyEnd ? 'right-0' : 'left-0'} absolute top-10`}>
    <div className='border w-max max-w-sm p-3 rounded-xl bg-white'>
      {title && <span className='p-4 font-bold text-gray-400' >{title}</span>}
      {subItems.map((subItem, subId) => (
        <MenuSubItemContent
          key={subItem.title + subId}
          title={subItem.title}
          subTitle={subItem.subTitle}
        />
      ))}
    </div>
  </div>
);

const LanguageButton = ({ onClick, active, item }: LanguageButtonProps) => (
  <React.Fragment>
    <div className='flex items-center relative z-20' onClick={onClick}>
      <img className='pr-2' src={images.flagIndo} height={28} width={28} alt="id" />
      <span className='pr-2'>ID</span>
      <DirectionIcon height={16} width={16} direction={active ? 'DOWN' : 'UP'} />
    </div>
    {active && item.subItems.length > 0 && <MenuSubItem subItems={item.subItems} title='BAHASA' justifyEnd />}
  </React.Fragment>
);

const MenuItem = ({ active, onClick, item, justifyEnd }: MenuItemProps) => (
  <React.Fragment>
    <div
      onClick={onClick}
      className='relative z-50'
    >
      <h1
        className={`text px-5 lg:px-10 ${active ? 'text-gray-400' : ''}`}
      >
        {item.title}
      </h1>
    </div>
    {active && item.subItems.length > 0 && <MenuSubItem subItems={item.subItems} justifyEnd={justifyEnd} />}
  </React.Fragment>
);

const Menu = ({ list, handleClickItem, activeId }: MenuProps) => (
  <div className='flex items-start'>
    {list.map((item, id) => {
      const Component = item.title === 'Bahasa'
        ? LanguageButton
        : MenuItem;

      return (
        <div key={id} className='relative'>
          <Component
            onClick={handleClickItem(id)}
            active={activeId === id}
            item={item}
            justifyEnd={activeId >= (list.length - 3)}
          />
        </div>
      );
    })}
  </div>
);

const DesktopHeader = () => {
  const [activeId, setActiveId] = React.useState<number>(-1);

  const handleClickItem: MenuProps['handleClickItem'] = (id) => () => setActiveId(id);

  return (
    <div className='p-6 pt-8 hidden md:block'>
      <div className='flex justify-between'>
        <LogoHeader href='/' />
        <Menu list={listMenu} handleClickItem={handleClickItem} activeId={activeId} />
      </div>
    </div>
  )
};

DesktopHeader.displayName = 'DesktopHeaderComponent';

export default DesktopHeader;
