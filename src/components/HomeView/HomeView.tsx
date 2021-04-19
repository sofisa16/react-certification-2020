import React, {useState, useEffect, useContext} from 'react';
import {YouTubeResponse, YouTubeResponseItems} from './../../data-types/YoutubeAPI';
import {GlobalContext} from '../../contexts/GlobalContext';
import useYouTubeAPI from './../../hooks/useYouTubeAPI';
//import home_videos from './../../data/home_videos.json';
import Mosaic from './../Mosaic/Mosaic';

function HomeView(): JSX.Element {
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);
  const {search} = useContext(GlobalContext);
  const {getFromYouTubeAPI} = useYouTubeAPI();
  //const result = home_videos;

  useEffect(
    () => {
      async function searchInYoutube(q: string): Promise<void> {
        try {
          const response: Response = await getFromYouTubeAPI(`search?part=id&part=snippet&maxResults=25&q=${q}&type=video`);
          const result: YouTubeResponse = await response.json();
          setItems(result.items);
        }
        catch (error) {
          console.log(error);
        }
      }

      searchInYoutube(search);
    },
    [search]
  );

  return (
    <Mosaic items={items} />
  );
}

export default HomeView;
