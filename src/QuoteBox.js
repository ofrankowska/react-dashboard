import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Quote from './Quote';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const styles = {
    QuoteBox: {
        backgroundColor: "rgba(255,255,255,0.3)",
        boxShadow: "0 0 5px black",
        // border: "pink solid 1px",
        height: "130px",
        padding: "20px",
        color: "white",
        position: "relative",
        textAlign: "left"
    },
    deleteIcon: {
        position: "absolute",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        "&:hover": {
            color: "aquamarine",
            transform: "scale(1.2) rotate(5deg)",
            transition: "all 0.2s ease-in"
        }
    }
}

function QuoteBox(props) {
    const {text, author, removeQuote, id, classes} = props;
    return (
        <div className={classes.QuoteBox}>
            <Quote text={text} author={author}/>
            <DeleteOutlinedIcon className={classes.deleteIcon} onClick={()=>removeQuote(id)}/>
        </div>
    )
}

export default withStyles(styles)(QuoteBox);