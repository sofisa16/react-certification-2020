import React, {useState, useEffect} from 'react';
import CardWithFav from '../CardWithFav/CardWithFav';
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
      if (items) {
        for(const item of items) {
          if(item.snippet) {
            cards.push(
              <CardWithFav
                item={item}
                key={`${item?.snippet?.title}${item?.snippet?.publishedAt}_mosaic`}
              />
            );
          }
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
