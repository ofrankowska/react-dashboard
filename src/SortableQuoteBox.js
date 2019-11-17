import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Quote from './Quote';
import styles from './styles/SortableQuoteBoxStyles';

import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SortableElement } from 'react-sortable-hoc';

class SortableQuoteBox extends PureComponent {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(e) {
        e.stopPropagation();
        this.props.openDialog(this.props.id);
    }
    render() {
        const { text, author, classes } =this.props;
        return (
            <div className={classes.SortableQuoteBox}>
                <Quote text={text} author={author} />
                <DeleteOutlinedIcon className={classes.deleteIcon} onClick={this.handleDelete} />
            </div>
        )
    }
}

export default SortableElement(withStyles(styles)(SortableQuoteBox));