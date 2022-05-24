import React, {useState, useEffect, useContext} from 'react';
import {YouTubeResponse, YouTubeResponseItems} from './../../data-types/YoutubeAPI';
import {GlobalContext} from '../../contexts/GlobalContext';
import useYouTubeAPI from './../../hooks/useYouTubeAPI';
//import home_videos from './../../data/home_videos.json';
import Mosaic from './../Mosaic/Mosaic';
//import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Styled from './HomeView.styled';

function HomeView(): JSX.Element {
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);
  const {search} = useContext(GlobalContext);
  const {getFromYouTubeAPI} = useYouTubeAPI();
  const [pageToken, setPageToken] = useState<string[]>(['']);
  const {
    Container,
    //LeftButton,
    RightButton,
  } = Styled;
  //const result = home_videos;

  async function searchInYoutube(q: string, pageToken: string): Promise<void> {
    try {
      const response: Response = await getFromYouTubeAPI(`search?part=id&part=snippet&maxResults=25&q=${q}&type=video${pageToken}`);
      const result: YouTubeResponse = await response.json();
      setItems(result.items);
      setPageToken((prev) => {
        return [...prev, `${result?.nextPageToken}`];
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(
    () => {
      searchInYoutube(search, '');
    },
    [search]
  );

  function onNextClick(): void {
    searchInYoutube(search, `&pageToken=${pageToken[pageToken.length - 1]}`);
  }

  /*function onPrevClick(): void {
    pageToken.pop(); // removing the next
    pageToken.pop(); // removing the current one
    const prev = pageToken[pageToken.length - 1];
    searchInYoutube(search, `&pageToken=${prev}`);
  }*/

  return (
    <>
      <Mosaic items={items} data-testid='homeview' />
      <Container>
        {/*<LeftButton variant="contained" onClick={onPrevClick} disabled={pageToken.length === 2}><ArrowBackIosIcon /></LeftButton>*/}
        <RightButton variant="contained" onClick={onNextClick}><ArrowForwardIosIcon /></RightButton>
      </Container>
    </>
  );
}

export default HomeView;
