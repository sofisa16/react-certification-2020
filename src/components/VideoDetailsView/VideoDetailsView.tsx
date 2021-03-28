import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
//import useYouTubeAPI from './../../hooks/useYouTubeAPI';
import {YouTubeResponse, YouTubeResponseItems} from './../../data-types/YoutubeAPI';
import videos_id from '../../data/videos_id.json';

interface VideoDetailsViewParams {
  videoId: string;
}

function VideoDetailsView(): JSX.Element {
  const {videoId} = useParams<VideoDetailsViewParams>();
  //const {getFromYouTubeAPI} = useYouTubeAPI();
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);
  const result: YouTubeResponse = videos_id;

  useEffect(
    () => {
      async function getVideoFromYoutube(/*videoId: string*/): Promise<void> {
        try {
          //const response: Response = await getFromYouTubeAPI(`videos?part=contentDetails&part=id&part=player&part=snippet&part=statistics&id=${videoId}`);
          //const result: YouTubeResponse = await response.json();
          
          setItems(result.items);
        }
        catch (error) {
          console.log(error);
        }
      }

      getVideoFromYoutube(/*videoId*/);
    },
    [videoId]
  );

  return (
    <div>
      {items && items[0] && items[0].id}
    </div>
  );
}

export default VideoDetailsView;