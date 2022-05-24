import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CardWithFav from '../../../components/CardWithFav/CardWithFav';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { GlobalContextProvider } from '../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import home_videos from './../../../data/home_videos.json';

describe('Testing CardWithFav component', () => {
  it('renders CardWithFav', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);

    const card = render(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <CardWithFav
              item={home_videos.items[0]}
            />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    );

    const cardWithFav = card.getByTestId('CardWithFav');
    fireEvent.mouseEnter(
      card.getByTestId('CardWithFav'),
    );
    expect(cardWithFav).toBeInTheDocument();
  });

  it('verifies if FavoriteButton renders over CardWithFav', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);

    const card = render(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <CardWithFav
              item={home_videos.items[0]}
            />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    );
    expect(card.getByTestId('FavoriteButton')).toBeInTheDocument();
  });
});