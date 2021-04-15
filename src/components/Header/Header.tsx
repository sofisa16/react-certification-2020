import React, {useContext, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';
import SearchBox from './components/SearchBox/SearchBox';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import {GlobalContext} from './../../contexts/GlobalContext';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useHistory} from 'react-router-dom';

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

function Header(): JSX.Element {
  const { darkState, setDarkState } = useContext(GlobalContext);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDarkState(event.target.checked);
  };

  function onClick(): void {
    setOpenDrawer(false);
    history.push('/');
  }

  function onClickFav(): void {
    setOpenDrawer(false);
    history.push('/favorites');
  }

  return (
    <div>
      <Drawer anchor='left' open={openDrawer} onClose={() => { setOpenDrawer(false); }}>
        <StyledList>
          <ListItem button key={'home'} onClick={onClick}>
            <StyledListItemIcon><HomeIcon /></StyledListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
          <ListItem button key={'favorite'} onClick={onClickFav}>
            <StyledListItemIcon><FavoriteIcon /></StyledListItemIcon>
            <ListItemText primary={"Favorites"} />
          </ListItem>
        </StyledList>
      </Drawer>
      <StyledAppBar position='static' darkState={darkState}>
        <ToolbarGrid>
          <MenuMargin>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open panel'
            >
              <MenuIcon onClick={() => { setOpenDrawer(true); }}/>
            </IconButton>
          </MenuMargin>
          <SearchBox />
          <RightSide>
            <FormControlLabel
              control={
                <Switch
                  checked={darkState}
                  onChange={handleChange}
                  name='darkTheme'
                  id='darkTheme'
                />
              }
              label='Dark mode'
            />
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-haspopup='true'
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </RightSide>
        </ToolbarGrid>
      </StyledAppBar>
    </div>
  );
}

export default Header;