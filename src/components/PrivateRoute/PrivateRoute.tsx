import React, {useContext} from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import {GlobalContext} from '../../contexts/GlobalContext';

function PrivateRoute(props: RouteProps): JSX.Element {
  const { authenticated } = useContext(GlobalContext);

  return (
    <Route
      {...props}
    >
      {
        authenticated
        ? props.children
        : <Redirect
            to={{
              pathname: '/',
              state: {
                from: props.location,
              }
            }}
          />
      }
    </Route>
  );
}

export default PrivateRoute;