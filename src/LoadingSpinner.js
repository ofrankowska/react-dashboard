import React from 'react';
import styles from './styles/LoadingSpinnerStyles';
import { withStyles } from "@material-ui/core/styles";

function LoadingSpinner(props) {
    const { classes } = props;
    return (
        <div className={classes.loader}></div>
    )
}

export default withStyles(styles)(LoadingSpinner);