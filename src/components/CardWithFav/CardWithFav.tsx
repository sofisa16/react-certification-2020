import React, {useState} from 'react';
import {YouTubeResponseItems} from '../../data-types/YoutubeAPI';
import Card from './../Card/Card';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Container from '../CardWithFav/CardWithFav.styled';

interface CardWithFavProps {
  item: YouTubeResponseItems;
}

function CardWithFav(props: CardWithFavProps): JSX.Element {
  const {item} = props;
  const id = typeof(item.id) === 'string' ? item.id : item?.id?.videoId;
  const [showFavButton, setShowFavButton] = useState<boolean>(false);

  function onMouseEnter(): void {
    setShowFavButton(true);
  }

  function onMouseLeave(): void {
    setShowFavButton(false);
  }

  return (
    <Container onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
      {
        showFavButton &&
        <FavoriteButton item={item} isComplete={false} />
      }
      <Card
        title={`${item?.snippet?.title}`}
        thumbnails={`${item?.snippet?.thumbnails?.high?.url}`}
        description={`${item?.snippet?.description}`}
        videoId={`${id}`}
        key={`${item?.snippet?.title}${item?.snippet?.publishedAt}`}
      />
    </Container>
  );
}

export default CardWithFav;