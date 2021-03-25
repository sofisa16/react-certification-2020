import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBox from '../../../../../components/Header/components/SearchBox/SearchBox';

test('renders SearchBox', () => {
  render(<SearchBox />);
  const inputNode = screen.getByPlaceholderText('Search…');
  expect(inputNode).toBeInTheDocument();
});
