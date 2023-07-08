import React from 'react';

import useHomepage from './useHomepage';
import { CurrenciesContext } from '../../hooks/useCurrencies';
import Header from '../../components/Header';
import SearchSection from '../../components/Search';
import TopMovers from '../../components/TopMovers';
import { LoadingIcon } from '../../assets';

const Content = () => (
  <React.Fragment>
    <TopMovers />
  </React.Fragment>
);

const Homepage = () => {
  const {
    currencies,
    error,
    isLoading
  } = useHomepage();

  if (error) return (
    <span>ERROR</span>
  )

  return (
    <CurrenciesContext.Provider value={currencies}>
      <div className='max-w-screen-xl mx-auto'>
        <Header />
        <SearchSection />
        {isLoading ? <LoadingIcon /> : <Content />}
      </div>
    </CurrenciesContext.Provider>
  );
};

Homepage.displayName = 'Homepage';

export default Homepage;
