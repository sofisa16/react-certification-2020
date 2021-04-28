import React from 'react';
import RelatedVideo from '../../../components/RelatedVideo/RelatedVideo';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';

it('renders RelatedVideo component', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const tree = render(
    <Router history={history}>
      <RelatedVideo
        title="title"
        thumbnails="thumbnails"
        videoId="videoId"
        key="key"
      />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});