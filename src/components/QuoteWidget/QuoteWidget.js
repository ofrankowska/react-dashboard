import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
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
const EMERGENCY_QUOTES = [
  {
    text: 'Your mind will answer most questions if you learn to relax and wait for the answer.',
    author: 'William Burroughs',
    id: '8c242df4-e701-4d01-9d77-e0fd2590f9e4',
  },
  {
    text: 'The shortest answer is doing.',
    author: 'Lord Herbert',
    id: 'b17a51eb-4bac-4448-a6ea-56fd663d8baf',
  },
  {
    text: 'Nobody can do everything, but everybody can do something.',
    author: null,
    id: 'f6240458-d757-4bc0-946f-358a0b2b2baa',
  },
  {
    text: "Never regret. If it's good, it's wonderful. If it's bad, it's experience.",
    author: 'Victoria Holt',
    id: '6e4a308e-9e9f-4e2f-b4f9-3d10d3fbf18d',
  },
  {
    text:
      'To effectively communicate, we must realize that we are all different in the way we perceive the world and use this understanding as a guide to our communication with others.',
    author: 'Anthony Robbins',
    id: '155012c3-553e-4e27-a35e-eaf677b00e6b',
  },
  {
    text:
      'Criticism is something you can easily avoid by saying nothing, doing nothing, and being nothing.',
    author: 'Aristotle',
    id: 'ff6abcd4-5b96-4b3f-99dd-1ebbec492977',
  },
];

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
    try {
      const response = await fetch(QUOTES_API);
      const quotes = await response.json();
      this.setState({ quotes }, this.getRandomQuote);
    } catch (error) {
      this.setState({ quotes: EMERGENCY_QUOTES }, this.getRandomQuote);
    }
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
    const { id } = this.state;
    this.setState({ favorite: false });
    removeQuote(id);
  };

  render() {
    const { author, text, id, favorite } = this.state;
    const { classes } = this.props;
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

QuoteWidget.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  addQuote: PropTypes.func.isRequired,
  removeQuote: PropTypes.func.isRequired,
};

export default withStyles(styles)(QuoteWidget);
