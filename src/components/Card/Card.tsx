import React from 'react';
import {useLocation} from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {NoStyleLink} from './../../styles/common';
import Styled from './Card.styled';

interface MediaCardProps {
  title: string;
  thumbnails: string;
  description: string;
  videoId: string;
}

function MediaCard(props: MediaCardProps): JSX.Element {
  const {title, thumbnails, description, videoId} = props;
  const { CardRoot, CardMediaRoot } = Styled;
  const {pathname} = useLocation<Location>();
  const link = pathname === '/favorites' 
    ? `/favorites/${videoId}`
    :`/videos/${videoId}`;

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