import React from 'react';

import useHomepage from './useHomepage';
import { CurrenciesContext } from '../../hooks/useCurrencies';
import useSearch, { SearchContext } from '../../hooks/useSearch';
import Header from '../../components/Header';
import SearchSection from '../../components/Search';
import TopMovers from '../../components/TopMovers';
import Categories from '../../components/Categories';
import Table from '../../components/Table';
import { LoadingIcon } from '../../assets';

const Content = () => (
  <React.Fragment>
    <TopMovers />
    <Categories />
    <Table />
  </React.Fragment>
);

const Homepage = () => {
  const {
    currencies,
    error,
    isLoading
  } = useHomepage();

  const hookSearch = useSearch();

  if (error) return (
    <span>ERROR</span>
  );

  return (
    <CurrenciesContext.Provider value={currencies}>
      <SearchContext.Provider value={hookSearch}>
        <div className='max-w-screen-xl mx-auto'>
          <Header />
          <SearchSection />
          {isLoading ? <LoadingIcon /> : <Content />}
        </div>
      </SearchContext.Provider>
    </CurrenciesContext.Provider>
  );
};

Homepage.displayName = 'Homepage';

export default Homepage;
