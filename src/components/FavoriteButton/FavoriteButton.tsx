import React, {useState, useContext, useEffect} from 'react';
import {YouTubeResponseItems} from '../../data-types/YoutubeAPI';
import Button from '@material-ui/core/Button';
import {GlobalContext} from '../../contexts/GlobalContext';

interface FavoriteButtonProps {
  item: YouTubeResponseItems;
}

function FavoriteButton(props: FavoriteButtonProps): JSX.Element {
  const {item} = props;
  const {favoriteVideos, dispatchFav, authenticated} = useContext(GlobalContext);
  const [buttonLabel, setButtonLabel] = useState<string>('Agregar a favoritos');

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
        setButtonLabel('Remover de favoritos');
      }
      else {
        setButtonLabel('Agregar a favoritos');
      }
    },
    [favoriteVideos, item]
  );

  return (
    <>
      {
        authenticated &&
          <Button onClick={toogleAddFavorite}>{buttonLabel}</Button>
      }
    </>
  );
}

export default FavoriteButton;