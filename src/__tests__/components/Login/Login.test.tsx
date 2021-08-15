import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../../../components/Login/Login';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { GlobalContextProvider } from '../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';

describe('Login component', () => {
  it('renders Login component', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
    
    render(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <Login />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    );
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });
});