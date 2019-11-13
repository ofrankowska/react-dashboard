import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles";

const styles = {
    loader: {
        width: "60px",
        height: "60px",
        border: "10px dotted rgba(255, 255, 255, 0.7)",
        borderRadius: "50%",
        animation: "$spin 2s linear infinite",
        margin: "auto"
    },
    "@keyframes spin": {
        from: {
            transform: "rotate(0deg)",
        },
        to: {
            transform: "rotate(360deg)",
        }
    }
}
function LoadingSpinner(props) {
    const { classes } = props;
    return (
        <div className={classes.loader}></div>
    )
}

export default withStyles(styles)(LoadingSpinner);