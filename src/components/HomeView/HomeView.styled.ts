import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin: 10px 0px 40px;
`;

const LeftButton = styled(Button)`
  margin-right: 10px;
`;

const RightButton = styled(Button)`
  margin-left: 10px;
`;

const Styled = {
  Container,
  LeftButton,
  RightButton,
};

export default Styled;