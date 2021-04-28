import React from 'react';
import Styled from './RelatedVideo.styled';

interface RelatedVideoProps {
  title: string;
  thumbnails: string;
  videoId: string;
}

function RelatedVideo(props: RelatedVideoProps): JSX.Element {
  const {title, thumbnails, videoId} = props;
  const link = `/videos/${videoId}`;
  const {
    ParentContainer,
    RightContainer,
    LeftContainer,
    Title,
    ColorNoStyleLink,
  } = Styled;

  return (
    <ColorNoStyleLink to={link}>
      <ParentContainer>
        <RightContainer src={thumbnails} alt="image" />
        <LeftContainer>
          <Title variant='body1'>
            {title}
          </Title>
        </LeftContainer>
      </ParentContainer>
    </ColorNoStyleLink>
  );
}

export default RelatedVideo;