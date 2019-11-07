import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    time: {
        fontSize: "8rem",
        fontWeight: 400,
    }   
}

function Clock(props) {
    const {hour, min, sec, classes}= props;
    function addZero(n){
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }
    return (
        <time className={classes.time}>
            {addZero(hour)}<span>:</span>{addZero(min)}<span>:</span>{addZero(sec)}
        </time>
    )
}

export default withStyles(styles)(Clock);