import React from 'react';
import PropTypes from 'prop-types';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/core/styles';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import Quote from '../Quote/Quote';
import styles from './SortableQuoteBoxStyles';

const SortableQuoteBox = ({ text, author, id, openDialog, classes }) => {
  const handleDelete = e => {
    e.stopPropagation();
    openDialog(id);
  };
  return (
    <div className={classes.SortableQuoteBox}>
      <Quote text={text} author={author} />
      <DeleteOutlinedIcon className={classes.deleteIcon} onClick={handleDelete} />
    </div>
  );
};

SortableQuoteBox.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  author: PropTypes.string,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  openDialog: PropTypes.func.isRequired,
};

SortableQuoteBox.defaultProps = {
  author: '',
};

export default SortableElement(withStyles(styles)(SortableQuoteBox));
