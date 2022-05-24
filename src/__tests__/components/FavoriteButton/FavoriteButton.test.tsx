import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FavoriteButton from '../../../components/FavoriteButton/FavoriteButton';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { GlobalContextProvider } from '../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import home_videos from './../../../data/home_videos.json';

describe('Testing FavoriteButton component', () => {
  it('renders FavoriteBorder icon', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
  
    const tree = render(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <FavoriteButton item={home_videos.items[0]} isComplete={false} />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    );
    expect(tree.getByTestId('FavoriteBorder')).toBeInTheDocument();
  });

  it('renders Favorite icon', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
  
    const tree = render(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <FavoriteButton item={home_videos.items[0]} isComplete={false} />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    );
    fireEvent.click(
      tree.getByTestId('FavoriteBorder'),
    );
    expect(tree.getByTestId('Favorite')).toBeInTheDocument();
  });
});