import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBox from '../../../../../components/Header/components/SearchBox/SearchBox';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

test('renders SearchBox', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  render(
    <Router history={history}>
      <SearchBox />
    </Router>
  );

  const inputNode = screen.getByPlaceholderText('Search…');

  expect(inputNode).toBeInTheDocument();
});
