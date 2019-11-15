import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Quote from './Quote';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import {SortableElement} from 'react-sortable-hoc';

const styles = {
    SortableQuoteBox: {
        backgroundColor: "rgb(46, 46, 46)",
        boxShadow: "0 0 5px rgba(0,0,0,0.7)",
        height: "130px",
        padding: "20px",
        color: "white",
        position: "relative",
        textAlign: "left",
        cursor: "pointer",
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

const SortableQuoteBox = SortableElement((props) => {
    const {text, author, removeQuote, id, classes} = props;
    return (
        <div className={classes.SortableQuoteBox}>
            <Quote text={text} author={author}/>
            <DeleteOutlinedIcon className={classes.deleteIcon} onClick={()=>removeQuote(id)}/>
        </div>
    )
})

export default withStyles(styles)(SortableQuoteBox);