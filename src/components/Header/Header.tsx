import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import styled from 'styled-components';
import SearchBox from './components/SearchBox/SearchBox';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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

function Header(): JSX.Element {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setDarkTheme(event.target.checked);
  };

  return (
    <div>
      <AppBar position='static'>
        <ToolbarGrid>
          <MenuMargin>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open panel'
            >
              <MenuIcon />
            </IconButton>
          </MenuMargin>
          <SearchBox />
          <RightSide>
            <FormControlLabel
              control={
                <Switch
                  checked={darkTheme}
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
      </AppBar>
    </div>
  );
}

export default Header;