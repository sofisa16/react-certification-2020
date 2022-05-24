import React from 'react';
import Header from './components/Header/Header';
import {GlobalContextProvider} from './contexts/GlobalContext';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Auth0Provider } from '@auth0/auth0-react';
import Routes from './Routes/Routes';

function App(): JSX.Element {
  return (
    <Auth0Provider
      domain="sofisa16.us.auth0.com"
      clientId={`${process.env.REACT_APP_AUTH0_CLIENTID}`}
      redirectUri={window.location.origin}
    >
      <GlobalContextProvider>
        <CssBaseline>
          <Header />
          <Container>
            <Routes />
          </Container>
        </CssBaseline>
      </GlobalContextProvider>
    </Auth0Provider>
  );
}

export default App;
