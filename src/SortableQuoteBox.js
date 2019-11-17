import React, { PureComponent } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Quote from './Quote';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { SortableElement } from 'react-sortable-hoc';

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
        fontSize: "1.2em",
        userSelect: "none",
    },
    deleteIcon: {
        position: "absolute",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        padding: "5px",
        "&:hover": {
            color: "aquamarine",
            transform: "scale(1.2) rotate(5deg)",
            transition: "all 0.2s ease-in"
        }
    }
}

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