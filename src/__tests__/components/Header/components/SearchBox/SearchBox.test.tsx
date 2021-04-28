import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBox from '../../../../../components/Header/components/SearchBox/SearchBox';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {GlobalContextProvider} from '../../../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';

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
  
  it('renders SearchBox component', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
  
    const tree = renderer
      .create(
        <GlobalContextProvider>
          <Router history={history}>
            <SearchBox />
          </Router>
        </GlobalContextProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders SearchBox component', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
  
    const tree = render(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <SearchBox />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    );
    expect(tree).toMatchSnapshot();
  });
});