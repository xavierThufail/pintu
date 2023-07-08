import images from '../../../assets';
import { LogoProps } from '../../../constants/types';

const LogoHeader = ({ href }: LogoProps) => (
  <a href={href}>
    <img src={images.logo} />
  </a>
);

LogoHeader.displayName = 'LogoHeaderComponent';

export default LogoHeader;
