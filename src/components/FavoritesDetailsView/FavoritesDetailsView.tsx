import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {YouTubeResponseItems} from './../../data-types/YoutubeAPI';
import DetailsView, {DetailsViewParams} from './../DetailsView/DetailsView';
import {GlobalContext} from '../../contexts/GlobalContext';

function FavoritesDetailsView(): JSX.Element {
  const {videoId} = useParams<DetailsViewParams>();
  const [relatedItems, setRelatedItems] = useState<YouTubeResponseItems[]>([]);
  const {favoriteVideos} = useContext(GlobalContext);

  useEffect(
    () => {
      const temp = [];
      for(const key in favoriteVideos) {
        if (key !== videoId) {
          temp.push(favoriteVideos[key]);
        }
      }
      setRelatedItems(temp);
    },
    [favoriteVideos, videoId]
  );

  return (
    <DetailsView relatedItems={relatedItems} />
  );
}

export default FavoritesDetailsView;