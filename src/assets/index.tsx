import logo from './logo.svg';
import burger from './burger.svg';
import close from './close.svg';
import flagIndo from './flagIndo.png';
import search from './search.svg';

type DirectionIconProps = {
  direction: 'UP' | 'DOWN';
  width: number;
  height: number;
};

export const DirectionIcon = ({ direction, width, height }: DirectionIconProps) => (
  <div className={direction === 'UP' ? 'rotate-180' : '' }>
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        strokeWidth="2"
        d="M13.096 10.189C13.3569 9.99136 13.4063 9.6566 13.2248 9.40839L13.1696 9.34301L8.51505 4.54302C8.26499 4.28514 7.82913 4.26531 7.55049 4.48351L7.4843 4.54302L2.82977 9.34301C2.5858 9.59461 2.61876 9.97339 2.90339 10.189C3.16431 10.3867 3.54612 10.3787 3.79587 10.1822L3.86051 10.124L7.99967 5.85578L12.1388 10.124C12.3625 10.3546 12.7412 10.3983 13.022 10.2379L13.096 10.189Z"
        fill="currentColor" />
    </svg>
  </div>
);

const images = {
  logo,
  burger,
  close,
  flagIndo,
  search
};

export default images;
