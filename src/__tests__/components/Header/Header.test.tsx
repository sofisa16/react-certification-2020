import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../../components/Header/Header';

test('renders Dark mode text', () => {
  render(<Header />);
  const text = screen.getByText(/Dark mode/i);
  expect(text).toBeInTheDocument();
});

test('toogle Dark mode', () => {
  const utils = render(<Header />);
  const input = utils.getByLabelText('Dark mode') as HTMLInputElement;
  fireEvent.change(input, { target: { checked: true } });
  expect(input).toBeChecked();
});
