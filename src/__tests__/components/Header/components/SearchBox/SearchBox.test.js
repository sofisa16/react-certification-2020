import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../../../../../components/Header/components/SearchBox/SearchBox';
import { GlobalContextProvider } from '../../../../../contexts/GlobalContext';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
      push: mockHistoryPush,
  }),
}));

describe('Searchbar component', () => {
  beforeEach(() => {
    mockHistoryPush.mockRestore();
    JSON.parse = jest.fn();
  });

  it("should correctly render: input with placeholder.", () => {
    const {container} = render(
      <GlobalContextProvider>
        <Router history={history}>
          <SearchBox />
        </Router>
      </GlobalContextProvider>
    );
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
    const placeholder = screen.getByPlaceholderText(/Search/);
    expect(placeholder).toBeInTheDocument();
  });

  it('should show wizeline and redirect to "/"', () => {
    const history = createMemoryHistory();
    const route = '/favorites/';
    history.push(route);

    render(
      <GlobalContextProvider>
        <Router history={history}>
          <SearchBox />
        </Router>
      </GlobalContextProvider>
    );
    const input = screen.getByPlaceholderText(/Search/);

    fireEvent.change(input, { target: { value: 'wizeline' } });
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('wizeline');
  });
});