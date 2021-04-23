import React, {useState, useContext} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';
import {GlobalContext} from '../../../../contexts/GlobalContext';

const Search = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover: {
    background-color: rgba(255, 255, 255, 0.25);
  }
  margin-left: 0;
  width: 100%;

  @media (min-width: 600px) {
    width: auto;
    margin-left: 24px;
  }
`;

const SearchIconInput = styled.div`
  height: 100%;
  display: flex;
  padding: 0px 16px;
  position: absolute;
  align-items: center;
  pointer-events: none;
  justify-content: center;
`;

const InputInput = styled(InputBase)`
  width: 100%;
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding-left: calc(1em + 32px);
`;

const ColorInput = styled(InputInput)`
  color: inherit;
`;

function SearchBox(): JSX.Element {
  const {setSearch} = useContext(GlobalContext);
  const [localSearch, setLocalSearch] = useState<string>("");
  const queryString = useLocation();
  const history = useHistory();

  function onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setLocalSearch(event.target.value);
  }

  function onKeyPress(event: React.KeyboardEvent<HTMLDivElement>): void {
    if (event.key === 'Enter') {
      setSearch(localSearch);
      //setLocalSearch("");
      if(queryString.pathname !== '/') {
        history.push('/');
      }
    }
  }

  return (
    <Search>
      <SearchIconInput>
        <SearchIcon />
      </SearchIconInput>
      <ColorInput 
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
        value={localSearch}
        onChange={onChange}
        onKeyPress={onKeyPress}
        id={'search_box'}
      />
    </Search>
  );
}

export default SearchBox;
