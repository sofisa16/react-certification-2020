import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';
import {YouTubeResponse} from '../../data-types/YoutubeAPI';

const CardMediaRoot = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
  padding: 20px;
  margin: 32px;
  justify-items: center;
`;

function HomeView(): JSX.Element {
  const [cards, setCards] = useState<JSX.Element[]>([]);

  useEffect(
    () => {
      async function searchInYoutube(q: string): Promise<void> {
        try {
          const cards: JSX.Element[] = [];
          const result: YouTubeResponse = 
            await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${process.env.REACT_APP_KEY}`)
              .then(
                (res) => { 
                  return res.json(); 
                }
              );
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

      searchInYoutube('wizeline');
    },
    []
  );

  return (
    <CardMediaRoot>
      { cards }
    </CardMediaRoot>
  );
}

export default HomeView;
