import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../../components/Header/Header';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('renders Dark mode text', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const text = screen.getByText(/Dark mode/i);
  expect(text).toBeInTheDocument();
});

test('toogle Dark mode', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const utils = render(
    <Router history={history}>
      <Header />
    </Router>
  );
  const input = utils.getByLabelText('Dark mode') as HTMLInputElement;
  fireEvent.change(input, { target: { checked: true } });
  expect(input).toBeChecked();
});

it('renders Header component', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const tree = renderer
    .create(
      <Router history={history}>
        <Header />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});