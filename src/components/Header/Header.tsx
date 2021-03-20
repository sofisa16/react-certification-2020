import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from "styled-components";
import SearchBox from './components/SearchBox/SearchBox';
import Switch from '@material-ui/core/Switch';

const MenuMargin = styled.div`
  margin-right: 16px;
`;

const DarkModeText = styled.span`
  white-space: nowrap;
  align-self: center;
`;

const DarkModeContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin: 0px 16px;
`;

function Header(): JSX.Element {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDarkTheme(event.target.checked);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MenuMargin>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open panel"
            >
              <MenuIcon />
            </IconButton>
          </MenuMargin>
          <SearchBox />
          <DarkModeContainer>
            <Switch
              checked={darkTheme}
              onChange={handleChange}
              name="darkTheme"
            />
            <DarkModeText>Dark mode</DarkModeText>
          </DarkModeContainer>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;