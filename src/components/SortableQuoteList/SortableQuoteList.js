import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { SortableContainer } from 'react-sortable-hoc';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SortableQuoteBox from './SortableQuoteBox/SortableQuoteBox';
import styles from './SortableQuoteListStyles';

function SortableQuoteList(props) {
  const { favoriteQuotes, openDialog, classes } = props;
  return (
    <section className={classes.scrollableContainer}>
      <TransitionGroup className={classes.colorBoxes}>
        {favoriteQuotes.map((quote, i) => (
          <CSSTransition key={quote.id} timeout={300} classNames="fade">
            <SortableQuoteBox
              index={i}
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
              openDialog={openDialog}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
}

SortableQuoteList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  openDialog: PropTypes.func.isRequired,
  favoriteQuotes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SortableContainer(withStyles(styles)(SortableQuoteList));
