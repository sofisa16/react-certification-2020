import React, {useState, useEffect, useContext} from 'react';
import {YouTubeResponse, YouTubeResponseItems} from '../../data-types/YoutubeAPI';
import {GlobalContext} from '../../contexts/GlobalContext';
import Mosaic from '../Mosaic/Mosaic';

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
