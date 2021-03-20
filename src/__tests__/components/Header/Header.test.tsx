import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header/Header';

test('renders Dark mode text', () => {
  render(<Header />);
  const text = screen.getByText(/Dark mode/i);
  expect(text).toBeInTheDocument();
});
