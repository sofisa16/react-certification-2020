import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBox from '../../../../../components/Header/components/SearchBox/SearchBox';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { GlobalContextProvider } from '../../../../../contexts/GlobalContext';

describe('Testing SearchBox component', () => {
  beforeEach(
    () => {
      JSON.parse = jest.fn();
    }
  );

  it('renders SearchBox in the screen', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
  
    render(
      <GlobalContextProvider>
        <Router history={history}>
          <SearchBox />
        </Router>
      </GlobalContextProvider>
    );
  
    const inputNode = screen.getByPlaceholderText('Search…');
  
    expect(inputNode).toBeInTheDocument();
  });
});