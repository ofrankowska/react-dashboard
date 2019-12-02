import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './LoadingSpinnerStyles';

const LoadingSpinner = ({ classes }) => <div className={classes.loader} />;

LoadingSpinner.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

LoadingSpinner.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(LoadingSpinner);
