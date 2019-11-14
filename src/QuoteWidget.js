import React, { PureComponent } from 'react';
import Quote from './Quote';
import { QUOTES_API } from './constants';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { IconButton } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const styles = {
    QuoteWidget: {
        transform: "translateY(35px)",
        transition: "transform 0.4s ease-in",
        "&:hover": {
            transform: "translateY(0)",

        },
        "& button": {
            opacity: 0,
            transform: "translateY(-10px)",
            transition: "all 0.4s ease-in"
        },
        "&:hover button": {
            transform: "translateY(0)",
            opacity: 0.9,
        },
        "&:hover button:hover": {
            opacity: 1
        },
    },
    icon: {
        padding: 0, 
        margin: 0
    }

}

class QuoteWidget extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            author: "",
            text: "",
            id: "",
            favorite: false
        }
        this.getRandomQuote = this.getRandomQuote.bind(this);
        this.addToFavorites = this.addToFavorites.bind(this);
        this.removeFromFavorites = this.removeFromFavorites.bind(this);
    }
    async componentDidMount() {
        const response = await fetch(QUOTES_API);
        const quotes = await response.json();
        this.setState({ quotes });
        this.getRandomQuote();
    }
    getRandomQuote() {
        const quotes = this.state.quotes;
        const randomNum = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomNum];
        this.setState({ ...randomQuote, id: randomNum, favorite: false });
    }
    addToFavorites(){
        const {text, author} = this.state;
        this.setState({favorite: true});
        this.props.addQuote({text, author});
    }
    removeFromFavorites(){
        this.setState({favorite: false});
        this.props.removeQuote(this.state.text);
    }
    render() {
        const { author, text, id, favorite } = this.state;
        const { classes } = this.props;
        const nextBtn = (
            <IconButton
                color='inherit'
                aria-label='Add city weather'
                onClick={this.getRandomQuote}
                className={classes.icon}
            >
                <KeyboardArrowDownIcon fontSize='large' />
            </IconButton>
        );
        const favoriteBorderBtn = (
            <IconButton
                color='inherit'
                aria-label='Add quotes to favorites'
                onClick={this.addToFavorites}
                className={classes.icon}
            >
                <FavoriteBorderIcon />
            </IconButton>

        );
        const favoriteFilledBtn = (
            <IconButton
                color='inherit'
                aria-label='Remove quote from favorites'
                onClick={this.removeFromFavorites}
                className={classes.icon}
            >
                <FavoriteIcon />
            </IconButton>

        );
        return (
            <section className={classes.QuoteWidget}>
                <TransitionGroup>
                    {text &&
                        <CSSTransition key={id} timeout={300} classNames="fade">
                            <Quote author={author} text={text} />
                        </CSSTransition>
                    }
                </TransitionGroup>
                {nextBtn}
                {favorite ? favoriteFilledBtn : favoriteBorderBtn}
            </section>
        )
    }
}

export default withStyles(styles)(QuoteWidget);