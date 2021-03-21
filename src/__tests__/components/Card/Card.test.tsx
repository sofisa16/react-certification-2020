import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../../components/Card/Card';

test('renders Card title', () => {
  const card = render(
    <Card
      title="title"
      thumbnails="thumbnails"
      description="description"
      key="key"
    />
  );
  const title = card.getByText('title');
  expect(title).toBeInTheDocument();
});

test('renders Card description', () => {
  const card = render(
    <Card
      title="title"
      thumbnails="thumbnails"
      description="description"
      key="key"
    />
  );
  const description = card.getByText('description');
  expect(description).toBeInTheDocument();
});
