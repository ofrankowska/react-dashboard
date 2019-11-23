import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Quote from './Quote';
import styles from './styles/SortableQuoteBoxStyles';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SortableElement } from 'react-sortable-hoc';

const SortableQuoteBox = ({ text, author, id, openDialog, classes }) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        openDialog(id);
    }
    return (
        <div className={classes.SortableQuoteBox}>
            <Quote text={text} author={author} />
            <DeleteOutlinedIcon className={classes.deleteIcon} onClick={handleDelete} />
        </div>
    )

}

export default SortableElement(withStyles(styles)(SortableQuoteBox));