import React from 'react';
import { render } from '@testing-library/react';
import VideoDetailsView from '../../../components/VideoDetailsView/VideoDetailsView';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import {GlobalContextProvider} from '../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';

describe('renders RelatedVideo component', () => {
  it('renders VideoDetailsView component', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
  
    const tree = render(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <VideoDetailsView />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    );
    expect(tree.getByText('Tillman the Skateboarding Bulldog Skates, Skimboards, and SURFS!!')).toBeInTheDocument();
  });
});