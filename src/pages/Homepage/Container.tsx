import { CurrenciesContext } from '../../hooks/useCurrencies';
import Header from '../../components/Header';
import SearchSection from '../../components/Search';

const Homepage = () => {
  return (
    <CurrenciesContext.Provider value={[]}>
      <div className='max-w-screen-xl mx-auto'>
        <Header />
        <SearchSection />
      </div>
    </CurrenciesContext.Provider>
  );
};

Homepage.displayName = 'Homepage';

export default Homepage;
