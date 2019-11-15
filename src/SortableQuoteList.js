import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableQuoteBox from './SortableQuoteBox';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    colorBoxes: {

        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "24px",
        margin: "24px"
    },
}

function SortableQuoteList(props) {
    const { favoriteQuotes, removeQuote, classes } = props;

    return (
        <section className={classes.colorBoxes}>
            {favoriteQuotes.map((quote, i) => (
                <SortableQuoteBox index={i} key={quote.id} text={quote.text} author={quote.author} id={quote.id} removeQuote={removeQuote} />
            ))}
        </section>

    )
}

export default SortableContainer(withStyles(styles)(SortableQuoteList));