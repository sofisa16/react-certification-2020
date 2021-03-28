import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
//import useYouTubeAPI from './../../hooks/useYouTubeAPI';
import {YouTubeResponse, YouTubeResponseItems} from './../../data-types/YoutubeAPI';
import videos_id from '../../data/videos_id.json';
import Typography from '@material-ui/core/Typography';

interface VideoDetailsViewParams {
  videoId: string;
}

const RightContainer = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
  overflow: scroll;
`;

function VideoDetailsView(): JSX.Element {
  const {videoId} = useParams<VideoDetailsViewParams>();
  //const {getFromYouTubeAPI} = useYouTubeAPI();
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);
  const result: YouTubeResponse = videos_id;
  const [embedHtml, setEmbedHtml] = useState<string>('');

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

  useEffect(
    () => {
      if(items && items[0] && items[0].player && items[0].player.embedHtml) {
        setEmbedHtml(items[0].player.embedHtml);
      }
    },
    [items]
  );

  function iframe(embedHtml: string): {__html: string;} {
    return {
      __html: embedHtml,
    };
  }

  return (
    <div>
      <RightContainer>
        <div dangerouslySetInnerHTML={iframe(embedHtml)}></div>
        <Typography gutterBottom variant='h5' component='h2'>
          {items && items[0] && items[0].snippet.title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {items && items[0] && items[0].snippet.description}
        </Typography>
      </RightContainer>
      <LeftContainer>
        
      </LeftContainer>
    </div>
  );
}

export default VideoDetailsView;