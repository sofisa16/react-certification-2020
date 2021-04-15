import React, {useState, useEffect, useContext} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import useYouTubeAPI from './../../hooks/useYouTubeAPI';
import {YouTubeResponse, YouTubeResponseItems} from './../../data-types/YoutubeAPI';
//import videos_id from './../../data/videos_id.json';
//import bug from './../../data/bug.json';
//import related_videos from './../../data/related_videos.json';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RelatedVideo from './../RelatedVideo/RelatedVideo';
import {GlobalContext} from '../../contexts/GlobalContext';

interface VideoDetailsViewParams {
  videoId: string;
}

const ParentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-sizing: border-box;
`;

const RightContainer = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
`;

const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
  overflow: scroll;
`;

const DownContainer = styled.div`
  padding: 15px 30px;
`;

const TitleContainer = styled.div`
  padding-bottom: 15px;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const JustifyText = styled(Typography)`
  text-align: justify;
`;

const Iframe = styled.div`
  > iframe {
    width: 100%;
    height: 500px;
  }
`;

function VideoDetailsView(): JSX.Element {
  const {videoId} = useParams<VideoDetailsViewParams>();
  const {getFromYouTubeAPI} = useYouTubeAPI();
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);
  const [relatedItems, setRelatedItems] = useState<YouTubeResponseItems[]>([]);
  //const result: YouTubeResponse = videos_id;
  //const related: YouTubeResponse = bug;
  const [embedHtml, setEmbedHtml] = useState<string>('');
  const [relatedVideos, setRelatedVideos] = useState<JSX.Element[]>([]);
  const {favoriteVideos, dispatchFav} = useContext(GlobalContext);
  const [buttonLabel, setButtonLabel] = useState<string>('Agregar a favoritos');

  useEffect(
    () => {
      async function getVideoFromYoutube(/*videoId: string*/): Promise<void> {
        try {
          const response: Response = await getFromYouTubeAPI(`videos?part=contentDetails&part=id&part=player&part=snippet&part=statistics&id=${videoId}`);
          const result: YouTubeResponse = await response.json();
          
          setItems(result.items);
        }
        catch (error) {
          console.log(error);
        }
      }

      async function getRelatedVideosFromYoutube(/*videoId: string*/): Promise<void> {
        try {
          const response: Response = await getFromYouTubeAPI(`search?part=id&part=snippet&maxResults=25&relatedToVideoId=${videoId}&type=video`);
          const result: YouTubeResponse = await response.json();
          
          setRelatedItems(result.items);
        }
        catch (error) {
          console.log(error);
        }
      }

      getVideoFromYoutube(/*videoId*/);
      getRelatedVideosFromYoutube(/*videoId*/);
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

  useEffect(
    () => {
      const related: JSX.Element[] = [];
      for(const item of relatedItems) {
        const id = typeof(item.id) === 'string' ? item.id : item.id && item.id.videoId;
        if(item.snippet) {
          related.push(
            <RelatedVideo
              title={item.snippet.title}
              thumbnails={item.snippet.thumbnails.default.url}
              videoId={`${id}`}
              key={`${item.snippet.title}${item.snippet.publishedAt}`}
            />
          );
        }
      }
      setRelatedVideos(related);
    },
    [relatedItems]
  );

  function iframe(embedHtml: string): {__html: string;} {
    return {
      __html: embedHtml,
    };
  }

  function toogleAddFavorite(): void {
    const id = typeof(items[0].id) === 'string' ? items[0].id : items[0].id && items[0].id.videoId;
    if (favoriteVideos[`${id}`] && Object.keys(favoriteVideos[`${id}`]).length !== 0) {
      dispatchFav({
        type: 'remove',
        payload: items[0],
      });
    }
    else {
      dispatchFav({
        type: 'add',
        payload: items[0],
      });
    }
  }

  useEffect(
    () => {
      const id = items && items[0]
        ? typeof(items[0].id) === 'string'
          ? items[0].id
          : items[0].id && items[0].id.videoId
        : undefined;
      if (favoriteVideos[`${id}`] && Object.keys(favoriteVideos[`${id}`]).length !== 0) {
        setButtonLabel('Remover de favoritos');
      }
      else {
        setButtonLabel('Agregar a favoritos');
      }
    },
    [favoriteVideos]
  );

  return (
    <ParentContainer>
      <RightContainer>
        <Iframe dangerouslySetInnerHTML={iframe(embedHtml)}></Iframe>
        <DownContainer>
          <TitleContainer>
            <Typography gutterBottom variant='h5' component='h2'>
              {items && items[0] && items[0].snippet && items[0].snippet.title}
            </Typography>
            <Button onClick={toogleAddFavorite}>{buttonLabel}</Button>
          </TitleContainer>
          <JustifyText variant='body2' color='textSecondary'>
            {items && items[0] && items[0].snippet && items[0].snippet.description}
          </JustifyText>
        </DownContainer>
      </RightContainer>
      <LeftContainer>
        {relatedVideos}
      </LeftContainer>
    </ParentContainer>
  );
}

export default VideoDetailsView;