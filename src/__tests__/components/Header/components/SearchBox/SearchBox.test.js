import React from 'react';
import {render, screen} from '@testing-library/react';
import SearchBox from '../../../../../components/Header/components/SearchBox/SearchBox';
import {GlobalContextProvider} from '../../../../../contexts/GlobalContext';
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
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);

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

  /*it('should handle the type, handle the submit and redirect to "/"', () => {
    render(<GlobalProvider>
      <Searchbar />
    </GlobalProvider>);
    const form = screen.getByTestId('form');
    const input = screen.getByPlaceholderText(/Search/);

    fireEvent.change(input, { target: { value: 'test' } });
    // If the handleSubmit function in component does
    // e.preventDefault() we should expect the return
    // of the fireEvent.submit() function to be false
    const isDefaultPrevented = fireEvent.submit(form);

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('test');
    expect(isDefaultPrevented).toBe(false);
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });

  it('should handle the type, handle the svg click and redirect to "/"', () => {
    render(<GlobalProvider>
      <Searchbar />
    </GlobalProvider>);
    const input = screen.getByPlaceholderText(/Search/);
    const svg = screen.getByTestId("searchbarIcon");


    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(svg);

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('test');
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
  });*/
});