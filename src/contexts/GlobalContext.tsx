import React, {useState, useEffect, useReducer} from 'react';
import {ThemeProvider} from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  Theme,
} from '@material-ui/core/styles';
import {initialState, reducer, FavoriteVideos, Action} from './../components/FavoritesView/addToFavorites';
import {AUTH_STORAGE_KEY, AUTH_AVATAR, FAVORITES_VIDEOS} from './../utils/constants';
import {storage} from './../utils/storage';
import { useAuth0 } from "@auth0/auth0-react";

interface GlobalContextValues {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  darkState: boolean;
  setDarkState: React.Dispatch<React.SetStateAction<boolean>>;
  theme: Theme;
  favoriteVideos: FavoriteVideos;
  dispatchFav: React.Dispatch<Action>;
  authenticated: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
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
  authenticated: false,
  setAuthenticated: () => { return; },
  avatar: '',
  setAvatar: () => { return; },
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
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [avatar, setAvatar] = useState<string>('');
    const { user, isAuthenticated } = useAuth0();

    useEffect(
      () => {
        setAuthenticated(isAuthenticated);
      },
      [isAuthenticated]
    );

    useEffect(
      () => {
        if (user) {
          setAvatar(user.picture);
        }
      },
      [user]
    );

    useEffect(
      () => {
        setAuthenticated(Boolean(storage.get(AUTH_STORAGE_KEY)));
        setAvatar(String(storage.get(AUTH_AVATAR)));
        dispatchFav({
          type: 'addAll',
          all: JSON.parse(String(storage.get(FAVORITES_VIDEOS))),
        });
      },
      []
    );

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
        storage.set(FAVORITES_VIDEOS, JSON.stringify(favoriteVideos));
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
      authenticated,
      setAuthenticated,
      avatar,
      setAvatar,
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