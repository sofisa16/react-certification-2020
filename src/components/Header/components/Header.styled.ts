import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const MenuMargin = styled.div`
  margin-right: 16px;
`;

const RightSide = styled.div`
  @media (min-width: 600px) {
    display: flex;
  }

  display: none;
  justify-content: flex-end;
  align-items: center;
`;

const ToolbarGrid = styled(Toolbar)`
  display: grid;
  grid-template-columns: auto auto 1fr;
`;

interface StyledAppBarProps {
  darkState: boolean;
}

const StyledAppBar = styled(AppBar)<StyledAppBarProps>`
  ${({ theme, darkState }) => `
    background-color: ${darkState ? '#1C5476' : theme.palette.primary.main}
  `}
`;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 24px;
  padding-right: 12px;
`;

const StyledList = styled(List)`
  width: 250px;
`;

const Styled = {
  MenuMargin,
  RightSide,
  ToolbarGrid,
  StyledAppBar,
  StyledListItemIcon,
  StyledList,
};

export default Styled;