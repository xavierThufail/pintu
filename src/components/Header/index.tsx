import React from 'react';

import MobileHeader from './MobileHeader';
import DesktopHeader from './DesktopHeader';

const HeaderCotainer = () => (
  <React.Fragment>
    <MobileHeader />
    <DesktopHeader />
  </React.Fragment>
);

HeaderCotainer.displayName = 'HeaderCotainer';

export default HeaderCotainer;
