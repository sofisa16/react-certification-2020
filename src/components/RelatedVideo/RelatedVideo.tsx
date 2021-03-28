import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const ParentContainer = styled.div`
  height: 90px;
  position: relative;
  display: flex;
  margin-bottom: 15px;
`;

const RightContainer = styled.img`
  width: 120px;
  height: 90px;
`;

const LeftContainer = styled.div`
  height: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin: 0px 10px;
`;

const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface RelatedVideoProps {
  title: string;
  thumbnails: string;
}

function RelatedVideo(props: RelatedVideoProps): JSX.Element {
  const {title, thumbnails} = props;

  return (
    <ParentContainer>
      <RightContainer src={thumbnails} alt="image" />
      <LeftContainer>
        <Title variant='body1'>
          {title}
        </Title>
      </LeftContainer>
    </ParentContainer>
  );
}

export default RelatedVideo;