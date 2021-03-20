import React from 'react';
import Card from '../Card/Card';
import youtubeVideosMock from '../../data/youtube-videos-mock.json';
import styled from "styled-components";

const CardMediaRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  padding: 20px;
  margin: 32px;
  justify-items: center;
`;

function HomeView(): JSX.Element {
  const cards: JSX.Element[] = [];

  for(const card of youtubeVideosMock.items) {
    cards.push(
      <Card
        title={card.snippet.title}
        thumbnails={card.snippet.thumbnails.high.url}
        description={card.snippet.description}
      />
    );
  }

  return (
    <CardMediaRoot>
      { cards }
    </CardMediaRoot>
  );
}

export default HomeView;
