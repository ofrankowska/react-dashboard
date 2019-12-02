import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import arrayMove from 'array-move';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import DashboardView from './DashboardView/DashboardView';
import FavoriteQuotesView from './FavoriteQuotesView/FavoriteQuotesView';
import Page from './Page';

class App extends Component {
  constructor(props) {
    super(props);
    const savedQuotes = JSON.parse(window.localStorage.getItem('favoriteQuotes'));
    this.state = {
      favoriteQuotes: savedQuotes || [],
    };
  }

  addQuote = quote => {
    this.setState(st => ({ favoriteQuotes: [...st.favoriteQuotes, quote] }), this.syncLocalStorage);
  };

  removeQuote = id => {
    this.setState(
      st => ({
        favoriteQuotes: st.favoriteQuotes.filter(favoriteQuote => favoriteQuote.id !== id),
      }),
      this.syncLocalStorage,
    );
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(
      st => ({ favoriteQuotes: arrayMove(st.favoriteQuotes, oldIndex, newIndex) }),
      this.syncLocalStorage,
    );
  };

  syncLocalStorage = () => {
    const { favoriteQuotes } = this.state;
    window.localStorage.setItem('favoriteQuotes', JSON.stringify(favoriteQuotes));
  };

  render() {
    const { favoriteQuotes } = this.state;
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="page" timeout={500}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    render={() => (
                      <Page>
                        <DashboardView addQuote={this.addQuote} removeQuote={this.removeQuote} />
                      </Page>
                    )}
                  />
                  <Route
                    exact
                    path="/favorite-quotes"
                    render={routeProps => (
                      <Page>
                        <FavoriteQuotesView
                          favoriteQuotes={favoriteQuotes}
                          removeQuote={this.removeQuote}
                          onSortEnd={this.onSortEnd}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  />
                  <Route
                    render={() => (
                      <Page>
                        <DashboardView addQuote={this.addQuote} removeQuote={this.removeQuote} />
                      </Page>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
