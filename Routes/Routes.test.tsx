import React from 'react';
import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './../../App';

test('full app rendering', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.getByTestId('homeview')).toBeInTheDocument();
});

test('landing on a bad page', () => {
  const history = createMemoryHistory();
  history.push('/adsf');
  render(
    <Router history={history}>
      <App />
    </Router>
  )

  expect(screen.getByText(/404/i)).toBeInTheDocument();
});