import React from 'react';
import styles from './LoadingSpinnerStyles';
import { withStyles } from "@material-ui/core/styles";

const LoadingSpinner = ({ classes }) => (
    <div className={classes.loader}></div>
)

export default withStyles(styles)(LoadingSpinner);