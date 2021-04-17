import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';
import {YouTubeResponseItems} from './../../data-types/YoutubeAPI';

const CardMediaRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  margin: 32px;
  justify-items: center;
`;

interface MosaicProps {
  items: YouTubeResponseItems[];
}

function Mosaic(props: MosaicProps): JSX.Element {
  const {items} = props;
  const [cards, setCards] = useState<JSX.Element[]>([]);

  useEffect(
    () => {
      const cards: JSX.Element[] = [];
      for(const item of items) {
        const id = typeof(item.id) === 'string' ? item.id : item?.id?.videoId;
        if(item.snippet) {
          cards.push(
            <Card
              title={item.snippet.title}
              thumbnails={item.snippet.thumbnails.high.url}
              description={item.snippet.description}
              videoId={`${id}`}
              key={`${item.snippet.title}${item.snippet.publishedAt}`}
            />
          );
        }
      }
      setCards(cards);
    },
    [items]
  );

  return (
    <CardMediaRoot>
      { cards }
    </CardMediaRoot>
  );
}

export default Mosaic;
