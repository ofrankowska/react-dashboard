import React from 'react';
import styles from './styles/QuoteStyles';

import { withStyles } from "@material-ui/core/styles";

function Quote(props) {
    const { author, text, classes } = props;
    return (
            <blockquote className={classes.quote}>
                <p>"{text}"</p>
                {author && <footer>- {author}</footer>}
            </blockquote>

    )
}

export default withStyles(styles)(Quote);