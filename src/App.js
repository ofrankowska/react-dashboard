import React, { Component } from 'react'
import './App.css';
import Main from './Main';
import FavoriteQuotes from './FavoriteQuotes';
import { Route, Switch } from "react-router-dom";
import arrayMove from 'array-move';


class App extends Component {
  constructor(props) {
    super(props);
    const savedQuotes = JSON.parse(window.localStorage.getItem("favoriteQuotes"));
    this.state = {
      favoriteQuotes: savedQuotes || [],
    }
    this.addQuote = this.addQuote.bind(this);
    this.removeQuote = this.removeQuote.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
  }
  addQuote(quote) {
    this.setState(st => ({ favoriteQuotes: [...st.favoriteQuotes, quote] }),
      this.syncLocalStorage
    );
  }
  removeQuote(id) {
    this.setState(st => ({favoriteQuotes: st.favoriteQuotes.filter(favoriteQuote => favoriteQuote.id !== id)}),
    this.syncLocalStorage);
  }
  onSortEnd({oldIndex, newIndex}){
    this.setState(st => ({favoriteQuotes: arrayMove(st.favoriteQuotes, oldIndex, newIndex)}),
    this.syncLocalStorage);
  }
  syncLocalStorage() {
    window.localStorage.setItem("favoriteQuotes", JSON.stringify(this.state.favoriteQuotes));
  }
  render() {
    const { favoriteQuotes } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Main addQuote={this.addQuote} removeQuote={this.removeQuote} />} />
          <Route exact path="/favorite-quotes" render={(routeProps) => <FavoriteQuotes favoriteQuotes={favoriteQuotes} removeQuote={this.removeQuote} onSortEnd={this.onSortEnd} {...routeProps}/>} />
          <Route render={() => <Main />} />
        </Switch>
      </div>
    );
  }

}

export default App;
