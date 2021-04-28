import React, {useState, useEffect} from 'react';
import CardWithFav from '../CardWithFav/CardWithFav';
import Styled from './Mosaic.styled';
import {YouTubeResponseItems} from './../../data-types/YoutubeAPI';

interface MosaicProps {
  items: YouTubeResponseItems[];
}

function Mosaic(props: MosaicProps): JSX.Element {
  const {items} = props;
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const {
    CardMediaRoot
  } = Styled;

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
