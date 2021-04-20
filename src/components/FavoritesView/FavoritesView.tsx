import React, {useState, useEffect} from 'react';
import {YouTubeResponseItems} from '../../data-types/YoutubeAPI';
import Mosaic from '../Mosaic/Mosaic';
import { storage } from './../../utils/storage';
import { FavoriteVideos } from './addToFavorites';

function FavoritesView(): JSX.Element {
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);

  useEffect(
    () => {
      const favoriteVideos: FavoriteVideos = storage.get('favoriteVideos');
      const temp = [];
      for(const key in favoriteVideos) {
        temp.push(favoriteVideos[key]);
      }
      setItems(temp);
    },
    []
  );

  return (
    <Mosaic items={items} />
  );
}

export default FavoritesView;
