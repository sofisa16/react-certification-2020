import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dark mode text', () => {
  render(<App />);
  const text = screen.getByText(/Dark mode/i);
  expect(text).toBeInTheDocument();
});
