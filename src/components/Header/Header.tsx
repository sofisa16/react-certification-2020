import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from "styled-components";
import SearchBox from './components/SearchBox/SearchBox';

const MenuMargin = styled.div`
  margin-right: 16px;
`;

export default function PrimarySearchAppBar(): JSX.Element {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <MenuMargin>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>
          </MenuMargin>
          <SearchBox />
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
