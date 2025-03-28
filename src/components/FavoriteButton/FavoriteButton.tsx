import React, {useState, useEffect} from 'react';
import {YouTubeResponseItems} from '../../data-types/YoutubeAPI';
import useGlobalContext from '../../contexts/useGlobalContext';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Styled from './FavoriteButton.styled';

interface FavoriteButtonProps {
  item: YouTubeResponseItems;
  isComplete: boolean;
}

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const {item, isComplete} = props;
  const {favoriteVideos, dispatchFav, authenticated} = useGlobalContext();
  const [isFav, setIsFav] = useState<boolean>(false);
  const {
    FloatButton,
    SizeButton,
  } = Styled;

  function toogleAddFavorite(): void {
    const id = typeof(item.id) === 'string' ? item.id : item.id?.videoId;
    if (favoriteVideos[`${id}`] && Object.keys(favoriteVideos[`${id}`]).length !== 0) {
      dispatchFav({
        type: 'remove',
        payload: item,
      });
    }
    else {
      dispatchFav({
        type: 'add',
        payload: item,
      });
    }
  }

  useEffect(
    () => {
      const id = item
        ? typeof(item.id) === 'string'
          ? item.id
          : item?.id?.videoId
        : undefined;
      if (favoriteVideos[`${id}`] && Object.keys(favoriteVideos[`${id}`]).length !== 0) {
        setIsFav(true);
      }
      else {
        setIsFav(false);
      }
    },
    [favoriteVideos, item]
  );

  return (
    <>
      {
        authenticated &&
          <FloatButton isComplete={isComplete} data-testid='FavoriteButton'>
            <SizeButton
              onClick={toogleAddFavorite}
              title={isFav ? 'Remover de favoritos' : 'Agregar a favoritos'}
              variant={isComplete ? undefined : 'contained'}
            >
              {
                isFav
                  ? isComplete
                    ? 'Remover de favoritos'
                    : <Favorite data-testid='Favorite' />
                  : isComplete
                    ? 'Agregar a favoritos'
                    : <FavoriteBorder data-testid='FavoriteBorder' />
              }
            </SizeButton>
          </FloatButton>
      }
    </>
  );
}

export default FavoriteButton;