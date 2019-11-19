import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableQuoteBox from './SortableQuoteBox';
import styles from './styles/SortableQuoteListStyles';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { withStyles } from '@material-ui/core/styles';

function SortableQuoteList(props) {
    const { favoriteQuotes, openDialog, classes } = props;
    return (
        <section className={classes.scrollableContainer}>
            <TransitionGroup className={classes.colorBoxes}>
                {favoriteQuotes.map((quote, i) => (
                    <CSSTransition key={quote.id} timeout={300} classNames="fade">
                        <SortableQuoteBox index={i} key={quote.id} text={quote.text} author={quote.author} id={quote.id} openDialog={openDialog} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </section>

    )
}

export default SortableContainer(withStyles(styles)(SortableQuoteList));