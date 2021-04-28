import React from 'react';
import { render } from '@testing-library/react';
import PrivateRoute from '../../../components/PrivateRoute/PrivateRoute';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import {GlobalContextProvider} from '../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';

it('renders PrivateRoute component', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const tree = render(
    <GlobalContextProvider>
      <CssBaseline>
        <Router history={history}>
          <PrivateRoute />
        </Router>
      </CssBaseline>
    </GlobalContextProvider>
  );
  expect(tree).toMatchSnapshot();
});