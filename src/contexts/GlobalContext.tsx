import React, {useState, useEffect} from 'react';
import {createMuiTheme, ThemeProvider, Theme} from '@material-ui/core/styles';

interface GlobalContextValues {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  darkState: boolean;
  setDarkState: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: Theme;
}

interface GlobalContextProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

const GlobalContext = React.createContext<GlobalContextValues>({
  search: '',
  setSearch: () => { return; },
  darkState: false,
  setDarkState: () => { return; },
  darkTheme: createMuiTheme({
    palette: {
      type: 'light',
    }
  }),
});

const GlobalContextProvider: React.FunctionComponent<GlobalContextProviderProps> =
  (props: GlobalContextProviderProps) => {
    const [search, setSearch] = useState<string>('wizeline');
    const [darkState, setDarkState] = useState<boolean>(false);
    const [darkTheme, setDarkTheme] = useState<Theme>(
      createMuiTheme({
        palette: {
          type: 'light',
        },
      })
    );

    useEffect(
      () => {
        const palletType = darkState ? 'dark' : 'light';
        setDarkTheme(
          createMuiTheme({
            palette: {
              type: palletType,
            }
          })
        );
      },
      [darkState]
    );

    const value: GlobalContextValues = {
      search,
      setSearch,
      darkState,
      setDarkState,
      darkTheme,
    };

    return (
      <ThemeProvider theme={darkTheme}>
        <GlobalContext.Provider
          value={value}
        >
          {props.children}
        </GlobalContext.Provider>
      </ThemeProvider>
    );
  };

export {GlobalContextProvider, GlobalContext};