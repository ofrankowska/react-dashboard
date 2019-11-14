import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Quote from './Quote';

const styles = {
    QuoteBox: {
        backgroundColor: "white",
        boxShadow: "0 0 5px rgba(29, 38, 54, 0.245)",
        // border: "pink solid 1px",
        height: "200px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    }
}

function QuoteBox(props) {
    const {text, author, classes} = props;
    return (
        <div className={classes.QuoteBox}>
            <Quote text={text} author={author}/>
        </div>
    )
}

export default withStyles(styles)(QuoteBox);