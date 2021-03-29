import React, {useState, useEffect, useContext} from 'react';
import Card from './../Card/Card';
import styled from 'styled-components';
import {YouTubeResponse, YouTubeResponseItems} from './../../data-types/YoutubeAPI';
import {SearchContext} from './../../contexts/SearchContext';
//import useYouTubeAPI from './../../hooks/useYouTubeAPI';
import HomeVideos from './../../data/home_videos.json';

const CardMediaRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  padding: 20px;
  margin: 32px;
  justify-items: center;
`;

function HomeView(): JSX.Element {
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const [items, setItems] = useState<YouTubeResponseItems[]>([]);
  const {search} = useContext(SearchContext);
  //const {getFromYouTubeAPI} = useYouTubeAPI();
  const result: YouTubeResponse = HomeVideos;

  useEffect(
    () => {
      async function searchInYoutube(/*q: string*/): Promise<void> {
        try {
          //const response: Response = await getFromYouTubeAPI(`search?part=id&part=snippet&maxResults=25&q=${q}&type=video`);
          //const result: YouTubeResponse = await response.json();
          setItems(result.items);
        }
        catch (error) {
          console.log(error);
        }
      }

      searchInYoutube(/*search*/);
    },
    [search]
  );

  useEffect(
    () => {
      const cards: JSX.Element[] = [];
      for(const item of items) {
        const id = typeof(item.id) === 'string' ? item.id : item.id.videoId;
        cards.push(
          <Card
            title={item.snippet.title}
            thumbnails={item.snippet.thumbnails.high.url}
            description={item.snippet.description}
            videoId={`${id}`}
            key={`${item.snippet.title}${item.snippet.publishedAt}`}
          />
        );
      }
      setCards(cards);
    },
    [items]
  );

  return (
    <CardMediaRoot>
      { cards }
    </CardMediaRoot>
  );
}

export default HomeView;
