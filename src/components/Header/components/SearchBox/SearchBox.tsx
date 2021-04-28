import React, {useState, useContext} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Styled from './SearchBox.styled';
import {GlobalContext} from '../../../../contexts/GlobalContext';

function SearchBox(): JSX.Element {
  const {setSearch} = useContext(GlobalContext);
  const [localSearch, setLocalSearch] = useState<string>("");
  const queryString = useLocation();
  const history = useHistory();
  const {
    Search,
    SearchIconInput,
    ColorInput,
  } = Styled;

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
