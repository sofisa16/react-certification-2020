import React, {useState, useEffect, useReducer} from 'react';
import {ThemeProvider} from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  Theme,
} from '@material-ui/core/styles';
import {initialState, reducer, FavoriteVideos, Action} from './../components/FavoritesView/addToFavorites';

interface GlobalContextValues {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  darkState: boolean;
  setDarkState: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
  favoriteVideos: FavoriteVideos;
  dispatchFav: React.Dispatch<Action>;
}

interface GlobalContextProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const GlobalContext = React.createContext<GlobalContextValues>({
  search: '',
  setSearch: () => { return; },
  darkState: false,
  setDarkState: () => { return; },
  theme: createMuiTheme({
    palette: {
      type: 'light',
    }
  }),
  favoriteVideos: {},
  dispatchFav: () => { return; },
});

const GlobalContextProvider: React.FunctionComponent<GlobalContextProviderProps> =
  (props: GlobalContextProviderProps) => {
    const [search, setSearch] = useState<string>('wizeline');
    const [darkState, setDarkState] = useState<boolean>(false);
    const [theme, setTheme] = useState<Theme>(
      createMuiTheme({
        palette: {
          type: 'light',
        },
      })
    );
    const [favoriteVideos, dispatchFav] = useReducer(reducer, initialState);

    useEffect(
      () => {
        const palletType = darkState ? 'dark' : 'light';
        setTheme(
          createMuiTheme({
            palette: {
              type: palletType,
            }
          })
        );
      },
      [darkState]
    );

    useEffect(
      () => {
        localStorage.setItem('favoriteVideos', JSON.stringify(favoriteVideos));
      },
      [favoriteVideos]
    );

    const value: GlobalContextValues = {
      search,
      setSearch,
      darkState,
      setDarkState,
      theme,
      favoriteVideos,
      dispatchFav,
    };

    return (
      <NoSsr>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <GlobalContext.Provider
              value={value}
            >
              {props.children}
            </GlobalContext.Provider>
          </ThemeProvider>
        </MuiThemeProvider>
      </NoSsr>
    );
  };

export {GlobalContextProvider, GlobalContext};