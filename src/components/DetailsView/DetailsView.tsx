import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import useYouTubeAPI from '../../hooks/useYouTubeAPI';
import {YouTubeResponse, YouTubeResponseItems} from '../../data-types/YoutubeAPI';
//import videos_id from './../../data/videos_id.json';
//import bug from './../../data/bug.json';
//import related_videos from './../../data/related_videos.json';
import Typography from '@material-ui/core/Typography';
import RelatedVideo from '../RelatedVideo/RelatedVideo';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import Styled from './DetailsView.styled';

export interface DetailsViewParams {
  videoId: string;
}

interface DetailsViewProps {
  relatedItems: YouTubeResponseItems[],
  path: string;
}

function DetailsView(props: DetailsViewProps): JSX.Element {
  const {relatedItems, path} = props;
  const {
    ParentContainer,
    RightContainer,
    LeftContainer,
    DownContainer,
    TitleContainer,
    JustifyText,
    Iframe,
  } = Styled;
  const {videoId} = useParams<DetailsViewParams>();
  const {getFromYouTubeAPI} = useYouTubeAPI();
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);
  const [embedHtml, setEmbedHtml] = useState<string>('');
  const [relatedVideos, setRelatedVideos] = useState<JSX.Element[]>([]);

  useEffect(
    () => {
      async function getVideoFromYoutube(videoId: string): Promise<void> {
        try {
          const response: Response = await getFromYouTubeAPI(`videos?part=contentDetails&part=id&part=player&part=snippet&part=statistics&id=${videoId}`);
          const result: YouTubeResponse = await response.json();
          
          setItems(result.items);
        }
        catch (error) {
          console.log(error);
        }
      }

      getVideoFromYoutube(videoId);
    },
    [videoId]
  );

  useEffect(
    () => {
      if(items[0]?.player?.embedHtml) {
        setEmbedHtml(items[0].player.embedHtml);
      }
    },
    [items]
  );

  useEffect(
    () => {
      const related: JSX.Element[] = [];
      for(const item of relatedItems) {
        const id = typeof(item.id) === 'string' ? item.id : item?.id?.videoId;
        if(item.snippet) {
          related.push(
            <RelatedVideo
              title={item.snippet.title}
              thumbnails={item.snippet.thumbnails.default.url}
              videoId={`${path}${id}`}
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

  return (
    <ParentContainer>
      <RightContainer>
        <Iframe dangerouslySetInnerHTML={iframe(embedHtml)}></Iframe>
        <DownContainer>
          <TitleContainer>
            <Typography gutterBottom variant='h5' component='h2'>
              {items[0]?.snippet?.title}
            </Typography>
            <FavoriteButton item={items[0]} isComplete={true} />
          </TitleContainer>
          <JustifyText variant='body2' color='textSecondary'>
            {items[0]?.snippet?.description}
          </JustifyText>
        </DownContainer>
      </RightContainer>
      <LeftContainer>
        {relatedVideos}
      </LeftContainer>
    </ParentContainer>
  );
}

export default DetailsView;