import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Styled from './NotFound.styled';

function NotFound(): JSX.Element {
  const { Container } = Styled;
  return (
    <Container>
      <Typography gutterBottom variant='h5' component='h2'>
        {'404'}
      </Typography>
      <Typography variant='body2' color='textSecondary' component='p'>
        {'Looks like you have followed a broken link or entered a URL that does not exist on this site.'}
      </Typography>
      <Link to={'/'}>Back to home</Link>
    </Container>
  );
}

export default NotFound;
