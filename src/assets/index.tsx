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

type MockIconProps = {
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

export const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16">
    <g fill="none" fillRule="evenodd">
      <path d="M-4-4h24v24H-4z"></path>
      <path fill="#000" d="M6.586 8L.929 2.343 2.343.93 8 6.586 13.657.929l1.414 1.414L9.414 8l5.657 5.657-1.414 1.414L8 9.414l-5.657 5.657L.93 13.657 6.586 8z"></path>
    </g>
  </svg>
);

export const MockIcon = ({ width, height }: MockIconProps) => (
  <svg width={width} height={height} viewBox="0 0 21 14" xmlns="http://www.w3.org/2000/svg">
    <title>Icons/GUI/Code</title>
    <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 13l6-6-6-6M7 13L1 7l6-6"></path>
    </g>
  </svg>
);

export const LoadingIcon = () => (
  <div className='w-screen h-96 flex justify-center items-center'>
    <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-blue-500">
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Loading...
    </div>
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
