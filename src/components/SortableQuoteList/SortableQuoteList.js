import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { SortableContainer } from 'react-sortable-hoc';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SortableQuoteBox from './SortableQuoteBox';
import styles from './SortableQuoteListStyles';

function SortableQuoteList(props) {
  const { favoriteQuotes, openDialog, classes } = props;
  return (
    <section className={classes.scrollableContainer}>
      <TransitionGroup className={classes.colorBoxes}>
        {favoriteQuotes.map((quote, i) => (
          <CSSTransition key={quote.id} timeout={300} classNames="fade">
            <SortableQuoteBox index={i} key={quote.id} {...quote} openDialog={openDialog} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
}

export default SortableContainer(withStyles(styles)(SortableQuoteList));
