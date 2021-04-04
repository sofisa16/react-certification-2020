import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HomeView from './components/HomeView/HomeView';
import VideoDetailsView from './components/VideoDetailsView/VideoDetailsView';
import {GlobalContextProvider} from './contexts/GlobalContext';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

function App(): JSX.Element {
  return (
    <GlobalContextProvider>
      <CssBaseline>
        <Header />
        <Container>
          <Switch>
            <Route exact path='/'>
              <HomeView />
            </Route>
            <Route path='/:videoId'>
              <VideoDetailsView />
            </Route>
          </Switch>
        </Container>
      </CssBaseline>
    </GlobalContextProvider>
  );
}

export default App;
