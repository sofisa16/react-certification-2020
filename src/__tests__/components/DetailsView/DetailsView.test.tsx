import React from 'react';
import { render } from '@testing-library/react';
import DetailsView from '../../../components/DetailsView/DetailsView';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { GlobalContextProvider } from '../../../contexts/GlobalContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import related_videos from '../../../data/related_videos.json';

describe('Testing DetailsView component', () => {
  it('renders DetailsView component', () => {
    const history = createMemoryHistory();
    const route = '/favorites/CQzUsTFqtW0';
    history.push(route);

    const tree = render(
      <GlobalContextProvider>
        <CssBaseline>
          <Router history={history}>
            <DetailsView
              relatedItems={related_videos.items}
              path='favorites/'
            />
          </Router>
        </CssBaseline>
      </GlobalContextProvider>
    );
    expect(tree.getByTestId('DetailsView')).toBeInTheDocument();
    expect(tree.getByText('Skateboarding Dog')).toBeInTheDocument();
    expect(tree.getByText('Tillman the Skateboarding Bulldog Skates, Skimboards, and SURFS!!')).toBeInTheDocument();
  });
});