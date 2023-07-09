import { MockIcon } from '../../../assets';
import { SubItemType } from '../../../constants/types';

const MenuSubItemContent = ({ title, subTitle }: SubItemType) => (
  <div className='p-4 flex items-start cursor-pointer hover:bg-blue-50 rounded-lg'>
    <MockIcon height={20} width={20} />
    <div className='flex pl-4 flex-col'>
      <span className='font-bold'>{title}</span>
      <span className='text-xs text-slate-500'>{subTitle}</span>
    </div>
  </div>
);

MenuSubItemContent.displayName = 'MenuSubItemContentComponent';

export default MenuSubItemContent;
