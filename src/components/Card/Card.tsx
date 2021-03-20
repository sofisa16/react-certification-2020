import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";

const CardRoot = styled(Card)`
  width: 345px;
  margin: 10px;
`;

const CardMediaRoot = styled(CardMedia)`
  height: 140px;
`;

interface MediaCardProps {
  title: string;
  thumbnails: string;
  description: string;
}

function MediaCard(props: MediaCardProps): JSX.Element {
  const { title, thumbnails, description } = props;

  return (
    <CardRoot>
      <CardActionArea>
        <CardMediaRoot
          image={thumbnails}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardRoot>
  );
}

export default MediaCard;