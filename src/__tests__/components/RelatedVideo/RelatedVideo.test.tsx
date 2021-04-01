import React from 'react';
import RelatedVideo from '../../../components/RelatedVideo/RelatedVideo';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('renders RelatedVideo component', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const tree = renderer
    .create(
      <Router history={history}>
        <RelatedVideo
          title="title"
          thumbnails="thumbnails"
          videoId="videoId"
          key="key"
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});