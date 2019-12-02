import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './QuoteStyles';

const Quote = ({ author, text, classes }) => (
  <blockquote className={classes.quote}>
    <p>&quot;{text}&quot;</p>
    {author && <footer>- {author}</footer>}
  </blockquote>
);

Quote.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  author: PropTypes.string,
  text: PropTypes.string.isRequired,
};

Quote.defaultProps = {
  author: '',
};

export default withStyles(styles)(Quote);
