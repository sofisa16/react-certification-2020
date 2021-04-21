import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HomeView from './components/HomeView/HomeView';
import VideoDetailsView from './components/VideoDetailsView/VideoDetailsView';
import {GlobalContextProvider} from './contexts/GlobalContext';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FavoritesView from './components/FavoritesView/FavoritesView';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FavoritesDetailsView from './components/FavoritesDetailsView/FavoritesDetailsView';
import NotFound from './components/NotFound/NotFound';

function App(): JSX.Element {
  return (
    <GlobalContextProvider>
      <CssBaseline>
        <Header />
        <Container>
          <Switch>
            <Route exact path='/'>
              <HomeView />
            </Route>
            <PrivateRoute exact path='/favorites'>
              <FavoritesView />
            </PrivateRoute>
            <PrivateRoute exact path='/favorites/:videoId'>
              <FavoritesDetailsView />
            </PrivateRoute>
            <Route exact path='/:videoId'>
              <VideoDetailsView />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Container>
      </CssBaseline>
    </GlobalContextProvider>
  );
}

export default App;
