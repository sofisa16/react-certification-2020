import styled from 'styled-components';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

const CardRoot = styled(Card)`
  width: 345px;
  height: 345px;
  margin: 10px;
`;

const CardMediaRoot = styled(CardMedia)`
  height: 140px;
`;

const Styled = {
  CardRoot,
  CardMediaRoot,
};

export default Styled;