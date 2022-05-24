import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const ParentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  box-sizing: border-box;
`;

const RightContainer = styled.div`
  width: 70%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 15px;
`;

const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
  overflow: scroll;
`;

const DownContainer = styled.div`
  padding: 15px 30px;
`;

const TitleContainer = styled.div`
  padding-bottom: 15px;
  display: grid;
  grid-template-columns: 1fr auto;
`;

const JustifyText = styled(Typography)`
  text-align: justify;
`;

const Iframe = styled.div`
  > iframe {
    width: 100%;
    height: 500px;
  }
`;

const Styled = {
  ParentContainer,
  RightContainer,
  LeftContainer,
  DownContainer,
  TitleContainer,
  JustifyText,
  Iframe,
};

export default Styled;