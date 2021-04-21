import React from 'react';
import {useLocation} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import {NoStyleLink} from './../../styles/common';

const CardRoot = styled(Card)`
  width: 345px;
  height: 345px;
  margin: 10px;
`;

const CardMediaRoot = styled(CardMedia)`
  height: 140px;
`;

interface MediaCardProps {
  title: string;
  thumbnails: string;
  description: string;
  videoId: string;
}

function MediaCard(props: MediaCardProps): JSX.Element {
  const {title, thumbnails, description, videoId} = props;
  const {pathname} = useLocation<Location>();
  const link = pathname === '/favorites' 
    ? `/favorites/${videoId}`
    :`/${videoId}`;

  return (
    <NoStyleLink to={link}>
      <CardRoot>
        <CardActionArea>
          <CardMediaRoot
            image={thumbnails}
            title={title}
            alt-text={title}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </CardRoot>
    </NoStyleLink>
  );
}

export default MediaCard;