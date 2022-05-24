import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import {YouTubeResponseItems} from './../../data-types/YoutubeAPI';
import DetailsView, {DetailsViewParams} from './../DetailsView/DetailsView';
import {GlobalContext} from './../../contexts/GlobalContext';
import NotFound from './../NotFound/NotFound';

function FavoritesDetailsView(): JSX.Element {
  const {videoId} = useParams<DetailsViewParams>();
  const [relatedItems, setRelatedItems] = useState<YouTubeResponseItems[]>([]);
  const {favoriteVideos} = useContext(GlobalContext);
  const [inFavorites, setInFavorites] = useState<boolean>(false);

  useEffect(
    () => {
      if (favoriteVideos[videoId] && Object.keys(favoriteVideos[videoId]).length > 0) {
        const temp = [];
        for(const key in favoriteVideos) {
          if (key !== videoId) {
            temp.push(favoriteVideos[key]);
          }
        }
        setRelatedItems(temp);
        setInFavorites(true);
      }
      else {
        setInFavorites(false);
      }
    },
    [favoriteVideos, videoId]
  );

  return (
    <>
      {
        inFavorites
          ? <DetailsView relatedItems={relatedItems} path='favorites/' data-testid='FavoritesDetailsView' />
          : <NotFound />
      }
    </>
  );
}

export default FavoritesDetailsView;