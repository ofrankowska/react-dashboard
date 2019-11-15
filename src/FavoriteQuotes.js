import React from 'react';
import SortableQuoteList from './SortableQuoteList';
import Navigation from './Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeartBroken } from '@fortawesome/free-solid-svg-icons';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    FavoriteQuotes: {
        backgroundColor: "#1D2636",
        minHeight: "100vh",
        paddingBottom: "12px",
        display: "flex",
        flexDirection: "column"
    },
    colorBoxes: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gridGap: "24px",
        margin: "24px"
    },
    message: {
        color: "white",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "-64px",
    },
    heartBrokenIcon: {
        fontSize: "60px",
        marginBottom: 0
    }
}
function FavoriteQuotes(props) {
    const { favoriteQuotes, removeQuote, onSortEnd, history, classes } = props;
    const sortableQuoteList = (
        <SortableQuoteList
            axis="xy"
            distance={20}
            onSortEnd={onSortEnd}
            favoriteQuotes={favoriteQuotes}
            removeQuote={removeQuote}
        />
    )
    const message = (
        <div className={classes.message}>
            <p className={classes.heartBrokenIcon}><FontAwesomeIcon icon={faHeartBroken} /></p>

            <h1>It looks like you haven't added any quotes to favorites yet.</h1>

        </div>
    )
    return (
        <div className={classes.FavoriteQuotes}>
            <Navigation title="Favorite Quotes" history={history} />
            {favoriteQuotes.length > 0 ? sortableQuoteList : message}
        </div>
    )
}

export default withStyles(styles)(FavoriteQuotes);