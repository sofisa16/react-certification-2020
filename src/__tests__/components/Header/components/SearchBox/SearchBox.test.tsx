import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBox from '../../../../../components/Header/components/SearchBox/SearchBox';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

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

it('renders SearchBox component', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const tree = renderer
    .create(
      <Router history={history}>
        <SearchBox />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});