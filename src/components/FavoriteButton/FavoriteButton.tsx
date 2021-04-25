import React, {useState, useContext, useEffect} from 'react';
import {YouTubeResponseItems} from '../../data-types/YoutubeAPI';
import Button from '@material-ui/core/Button';
import {GlobalContext} from '../../contexts/GlobalContext';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import styled from 'styled-components';

interface FloatButtonProps {
  isComplete: boolean;
}

const FloatButton = styled.div<FloatButtonProps>`
  ${
    ({ isComplete }) => {
      return !isComplete && `
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 1;
      `;
    }
  }
`;

interface FavoriteButtonProps {
  item: YouTubeResponseItems;
  isComplete: boolean;
}

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const {item, isComplete} = props;
  const {favoriteVideos, dispatchFav, authenticated} = useContext(GlobalContext);
  const [isFav, setIsFav] = useState<boolean>(false);

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
          <FloatButton isComplete={isComplete}>
            <Button
              onClick={toogleAddFavorite}
              title={isFav ? 'Remover de favoritos' : 'Agregar a favoritos'}
              variant={isComplete ? undefined : 'contained'}
            >
              {
                isFav
                  ? isComplete
                    ? 'Remover de favoritos'
                    : <Favorite />
                  : isComplete
                    ? 'Agregar a favoritos'
                    : <FavoriteBorder />
              }
            </Button>
          </FloatButton>
      }
    </>
  );
}

export default FavoriteButton;