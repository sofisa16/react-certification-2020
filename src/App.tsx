import React from 'react';
import Header from './components/Header/Header';
import HomeView from './components/HomeView/HomeView';
import {SearchContextProvider} from './contexts/SearchContext';

function App(): JSX.Element {
  return (
    <SearchContextProvider>
      <Header />
      <HomeView />
    </SearchContextProvider>
  );
}

export default App;
