import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../../components/Card/Card';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('Testing Card component', () => {
  it('renders Card title', () => {
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
  
  it('renders Card description', () => {
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
});