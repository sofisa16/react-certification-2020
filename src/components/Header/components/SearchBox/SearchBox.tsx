import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";

const Search = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.15);
  &:hover: {
    background-color: rgba(255, 255, 255, 0.25);
  }
  margin-left: 0;
  width: 100%;

  media (min-width: 600px) {
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
  return (
    <Search>
      <SearchIconInput>
        <SearchIcon />
      </SearchIconInput>
      <ColorInput 
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}

export default SearchBox;
