import React, {useState} from 'react';

interface SearchContextValues {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

interface SearchContextProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const SearchContext = React.createContext<SearchContextValues>({
  search: "",
  setSearch: () => { return; },
});

const SearchContextProvider: React.FunctionComponent<SearchContextProviderProps> =
  (props: SearchContextProviderProps) => {
    const [search, setSearch] = useState<string>('wizeline');
    const value: SearchContextValues = {
      search,
      setSearch,
    };

    return (
      <SearchContext.Provider
        value={value}
      >
        {props.children}
      </SearchContext.Provider>
    );
  };

export {SearchContextProvider, SearchContext};