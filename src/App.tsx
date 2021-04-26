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
import { Auth0Provider } from "@auth0/auth0-react";

function App(): JSX.Element {
  return (
    <Auth0Provider
      domain="sofisa16.us.auth0.com"
      clientId="2Uxf6ZBMb4HfrMI3JTBqC8XuWQT7kpWF"
      redirectUri={window.location.origin}
    >
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
    </Auth0Provider>
  );
}

export default App;
