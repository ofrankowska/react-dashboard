import React, { PureComponent } from 'react';
import Quote from './Quote';
import { QUOTES_API } from './constants';
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const styles = {
    QuoteWidget: {
        transform: "translateY(20px)",
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
            opacity: 0.6,
        },
        "&:hover button:hover": {
            opacity: 1
        },
    },

}

class QuoteWidget extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            author: "",
            text: "",
            id: ""
        }
        this.getRandomQuote = this.getRandomQuote.bind(this);
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
        this.setState({ ...randomQuote, id: randomNum });
    }
    render() {
        const { author, text, id } = this.state;
        const { classes } = this.props;

        return (
            <section className={classes.QuoteWidget}>
                <TransitionGroup>
                    {text &&
                    <CSSTransition key={id} timeout={300} classNames="fade">
                        <Quote author={author} text={text} />
                    </CSSTransition>
                    }
                </TransitionGroup>

                <IconButton
                    color='inherit'
                    aria-label='Add city weather'
                    onClick={this.getRandomQuote}
                    style={{ padding: 0, margin: 0 }}
                >
                    <KeyboardArrowDownIcon fontSize='large' />
                </IconButton>
            </section>
        )
    }
}

export default withStyles(styles)(QuoteWidget);