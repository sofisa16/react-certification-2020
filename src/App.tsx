import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HomeView from './components/HomeView/HomeView';
import VideoDetailsView from './components/VideoDetailsView/VideoDetailsView';
import {SearchContextProvider} from './contexts/SearchContext';

function App(): JSX.Element {
  return (
    <SearchContextProvider>
      <Header />
      <Switch>
        <Route exact path='/'>
          <HomeView />
        </Route>
        <Route path='/:videoId'>
          <VideoDetailsView />
        </Route>
      </Switch>
    </SearchContextProvider>
  );
}

export default App;
