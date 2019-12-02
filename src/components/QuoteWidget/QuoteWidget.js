import React, { PureComponent } from 'react';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid/v4';
import styles from './QuoteWidgetStyles';
import Quote from '../Quote/Quote';

const QUOTES_API = 'https://type.fit/api/quotes';

class QuoteWidget extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      author: '',
      text: '',
      id: '',
      favorite: false,
    };
  }

  async componentDidMount() {
    const response = await fetch(QUOTES_API);
    const quotes = await response.json();
    this.setState({ quotes });
    this.getRandomQuote();
  }

  getRandomQuote = () => {
    const { quotes } = this.state;
    const randomNum = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomNum];
    this.setState({ ...randomQuote, id: uuid(), favorite: false });
  };

  addToFavorites = () => {
    const { text, author, id } = this.state;
    const { addQuote } = this.props;
    this.setState({ favorite: true });
    addQuote({ text, author, id });
  };

  removeFromFavorites = () => {
    const { removeQuote } = this.props;
    this.setState({ favorite: false });
    removeQuote(this.state.id);
  };

  render() {
    const { author, text, id, favorite } = this.state;
    const { classes } = this.props;
    const nextBtn = (
      <IconButton
        color="inherit"
        aria-label="Add city weather"
        onClick={this.getRandomQuote}
        className={classes.icon}
      >
        <KeyboardArrowDownIcon fontSize="large" />
      </IconButton>
    );
    const favoriteBorderBtn = (
      <IconButton
        color="inherit"
        aria-label="Add quotes to favorites"
        onClick={this.addToFavorites}
        className={classes.icon}
      >
        <FavoriteBorderIcon />
      </IconButton>
    );
    const favoriteFilledBtn = (
      <IconButton
        color="inherit"
        aria-label="Remove quote from favorites"
        onClick={this.removeFromFavorites}
        className={classes.icon}
      >
        <FavoriteIcon />
      </IconButton>
    );
    return (
      <section className={classes.QuoteWidget}>
        <TransitionGroup>
          {text && (
            <CSSTransition key={id} timeout={300} classNames="fade">
              <Quote author={author} text={text} />
            </CSSTransition>
          )}
        </TransitionGroup>
        {nextBtn}
        {favorite ? favoriteFilledBtn : favoriteBorderBtn}
      </section>
    );
  }
}

export default withStyles(styles)(QuoteWidget);
