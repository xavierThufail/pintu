import React from 'react';

type SearchContextType = {
  value: string;
  setValue: (value: string) => void;
  isFocused: boolean;
  setIsFocused: (value: boolean) => void;
};

export const SearchContext = React.createContext<SearchContextType>({} as SearchContextType);

export const useSearchContext = () => React.useContext(SearchContext);

const useSearch = () => {
  const [value, setValue] = React.useState('');
  const [isFocused, setIsFocused] = React.useState(false);

  return {
    value,
    setValue,
    isFocused,
    setIsFocused
  };
};

export default useSearch;
