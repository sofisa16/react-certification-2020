import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../../components/Card/Card';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

test('renders Card title', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const card = render(
    <Router history={history}>
      <Card
        title="title"
        thumbnails="thumbnails"
        description="description"
        key="key"
        videoId="a"
      />
    </Router>
  );
  const title = card.getByText('title');
  expect(title).toBeInTheDocument();
});

test('renders Card description', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const card = render(
    <Router history={history}>
      <Card
        title="title"
        thumbnails="thumbnails"
        description="description"
        key="key"
        videoId="a"
      />
    </Router>
  );
  const description = card.getByText('description');
  expect(description).toBeInTheDocument();
});

it('renders Card component', () => {
  const history = createMemoryHistory();
  const route = '/';
  history.push(route);

  const tree = renderer
    .create(
      <Router history={history}>
        <Card
          title="title"
          thumbnails="thumbnails"
          description="description"
          key="key"
          videoId="a"
        />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});