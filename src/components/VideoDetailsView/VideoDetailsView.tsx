import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import useYouTubeAPI from './../../hooks/useYouTubeAPI';
import {YouTubeResponse, YouTubeResponseItems} from './../../data-types/YoutubeAPI';
import DetailsView, {DetailsViewParams} from './../DetailsView/DetailsView';

function VideoDetailsView(): JSX.Element {
  const {videoId} = useParams<DetailsViewParams>();
  const {getFromYouTubeAPI} = useYouTubeAPI();
  const [relatedItems, setRelatedItems] = useState<YouTubeResponseItems[]>([]);

  useEffect(
    () => {
      async function getRelatedVideosFromYoutube(videoId: string): Promise<void> {
        try {
          const response: Response = await getFromYouTubeAPI(`search?part=id&part=snippet&maxResults=25&relatedToVideoId=${videoId}&type=video`);
          const result: YouTubeResponse = await response.json();
          
          setRelatedItems(result.items);
        }
        catch (error) {
          console.log(error);
        }
      }

      getRelatedVideosFromYoutube(videoId);
    },
    [videoId]
  );

  return (
    <DetailsView relatedItems={relatedItems} path='' />
  );
}

export default VideoDetailsView;