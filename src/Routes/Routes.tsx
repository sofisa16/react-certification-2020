import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Location } from 'history';
import HomeView from '../components/HomeView/HomeView';
import Login from '../components/Login/Login';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import FavoritesDetailsView from '../components/FavoritesDetailsView/FavoritesDetailsView';
import FavoritesView from '../components/FavoritesView/FavoritesView';
import VideoDetailsView from '../components/VideoDetailsView/VideoDetailsView';
import NotFound from '../components/NotFound/NotFound';

interface RouterType {
  background: Location;
}

function Routes(): JSX.Element {
  const location = useLocation<Location>();
  const background: Location = location.state && 
    (location.state as unknown as RouterType).background;

  return (
    <>
      <Switch location={background || location}>
        <Route path="/favorites" render={({ match }) => {
          return (
            <>
              <PrivateRoute exact path={match.url}>
                <FavoritesView />
              </PrivateRoute>
              <PrivateRoute exact path={`${match.url}/:videoId`}>
                <FavoritesDetailsView />
              </PrivateRoute>
            </>
          )
        }} />
        <Route path="/videos" render={({ match }) => {
          return (
            <>
              <Route exact path={`${match.url}/:videoId`}>
                <VideoDetailsView />
              </Route>
            </>
          )
        }} />
        <Route path='/login' component={Login} />
        <Route exact path='/' component={HomeView} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      {background && <Route path='/login' component={Login} />}
    </>
  )
}

export default Routes;