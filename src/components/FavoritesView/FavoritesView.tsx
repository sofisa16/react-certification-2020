import React, {useState, useEffect, useContext} from 'react';
import {YouTubeResponseItems} from '../../data-types/YoutubeAPI';
import Mosaic from '../Mosaic/Mosaic';
import {GlobalContext} from '../../contexts/GlobalContext';

function FavoritesView(): JSX.Element {
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);
  const {favoriteVideos} = useContext(GlobalContext);

  useEffect(
    () => {
      const temp = [];
      for(const key in favoriteVideos) {
        temp.push(favoriteVideos[key]);
      }
      setItems(temp);
    },
    [favoriteVideos]
  );

  return (
    <Mosaic items={items} />
  );
}

export default FavoritesView;
