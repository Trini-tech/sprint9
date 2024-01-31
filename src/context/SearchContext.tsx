import { createContext, useContext, useState, ReactNode } from 'react';

interface SearchContextProps {
  searchFilter: string;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState<string>('');

  return <SearchContext.Provider value={{ searchFilter, setSearchFilter }}>{children}</SearchContext.Provider>;
};

export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
