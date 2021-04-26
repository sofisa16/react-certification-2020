import React from 'react';
import { render } from '@testing-library/react';
import CardWithFav from '../../../components/CardWithFav/CardWithFav';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import {GlobalContextProvider} from '../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import home_videos from './../../../data/home_videos.json';

it('renders CardWithFav component', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const tree = renderer
    .create(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <CardWithFav
              item={home_videos.items[0]}
            />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});