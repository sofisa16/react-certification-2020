import React, {useState, useEffect} from 'react';
import {YouTubeResponseItems} from '../../data-types/YoutubeAPI';
import Mosaic from '../Mosaic/Mosaic';

function FavoritesView(): JSX.Element {
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);

  useEffect(
    () => {
      const videos = localStorage.getItem('favoriteVideos');
      const favoriteVideos = JSON.parse(videos ? videos : '{}');
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
