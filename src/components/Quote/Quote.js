import React from 'react';
import styles from './QuoteStyles';

import { withStyles } from "@material-ui/core/styles";

const Quote = ({ author, text, classes }) => (
    <blockquote className={classes.quote}>
        <p>"{text}"</p>
        {author && <footer>- {author}</footer>}
    </blockquote>
)

export default withStyles(styles)(Quote);