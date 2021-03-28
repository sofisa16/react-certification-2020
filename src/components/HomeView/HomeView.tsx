import React, {useState, useEffect, useContext} from 'react';
import Card from './../Card/Card';
import styled from 'styled-components';
import {YouTubeResponse} from './../../data-types/YoutubeAPI';
import {SearchContext} from './../../contexts/SearchContext';
import useYouTubeAPI from './../../hooks/useYouTubeAPI';

const CardMediaRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  padding: 20px;
  margin: 32px;
  justify-items: center;
`;

function HomeView(): JSX.Element {
  const [cards, setCards] = useState<JSX.Element[]>([]);
  const {search} = useContext(SearchContext);
  const {getFromYouTubeAPI} = useYouTubeAPI();

  useEffect(
    () => {
      async function searchInYoutube(q: string): Promise<void> {
        try {
          const cards: JSX.Element[] = [];
          const response: Response = await getFromYouTubeAPI(`search?part=snippet&q=${q}`);
          const result: YouTubeResponse = await response.json();

          for(const card of result.items) {
            cards.push(
              <Card
                title={card.snippet.title}
                thumbnails={card.snippet.thumbnails.high.url}
                description={card.snippet.description}
                key={`${card.snippet.title}${card.snippet.publishedAt}`}
              />
            );
          }
          setCards(cards);
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
    <CardMediaRoot>
      { cards }
    </CardMediaRoot>
  );
}

export default HomeView;
