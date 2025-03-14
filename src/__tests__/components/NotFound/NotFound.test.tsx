import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../../../components/NotFound/NotFound';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import {GlobalContextProvider} from '../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';

describe('renders NotFound component', () => {
  it('renders NotFound component', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
  
    const tree = render(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <NotFound />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    );
    expect(tree.getByText('404')).toBeInTheDocument();
  });
});