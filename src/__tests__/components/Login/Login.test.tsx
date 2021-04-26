import React from 'react';
import { render } from '@testing-library/react';
import Login from '../../../components/Login/Login';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {GlobalContextProvider} from '../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';

it('renders Login component', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const tree = renderer
    .create(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <Login open={true} setOpen={jest.fn()} />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});