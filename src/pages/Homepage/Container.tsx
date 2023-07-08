import { CurrenciesContext } from '../../hooks/useCurrencies';
import Header from '../../components/Header';

const Homepage = () => {
  return (
    <CurrenciesContext.Provider value={[]}>
      <div className='max-w-screen-xl mx-auto'>
        <Header />
      </div>
    </CurrenciesContext.Provider>
  );
};

Homepage.displayName = 'Homepage';

export default Homepage;
