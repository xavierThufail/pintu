import React from 'react';

import MobileSearch from './MobileSearch';
import DesktopSearch from './DesktopSearch';

const SearchContainer = () => (
  <React.Fragment>
    <MobileSearch />
    <DesktopSearch />
  </React.Fragment>
);

SearchContainer.displayName = 'SearchContainer';
export default SearchContainer;
