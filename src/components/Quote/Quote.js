import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './QuoteStyles';


const Quote = ({ author, text, classes }) => (
  <blockquote className={classes.quote}>
    <p>&quot;{text}&quot;</p>
    {author && <footer>- {author}</footer>}
  </blockquote>
);

export default withStyles(styles)(Quote);
