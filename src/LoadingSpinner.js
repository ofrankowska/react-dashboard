import React from 'react';
import styles from './styles/LoadingSpinnerStyles';
import { withStyles } from "@material-ui/core/styles";

const LoadingSpinner = ({ classes }) => (
    <div className={classes.loader}></div>
)

export default withStyles(styles)(LoadingSpinner);