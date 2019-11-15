import React, { Component } from 'react';
import SortableQuoteList from './SortableQuoteList';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


const styles = {
    FavoriteQuotes: {
        backgroundColor: "#1D2636",
        minHeight: "100vh",
        paddingBottom: "12px"
    },
    AppBar: {
        backgroundColor: "black",

    },
    title: {
        marginRight: "auto",
    },
    colorBoxes: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gridGap: "24px",
        margin: "24px"
    },
    goBackBtn: {
        "&:hover": {
            color: "aquamarine",
            transition: "color 0.3s ease-in"
        }
    }
}
class FavoriteQuotes extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    goBack() {
        this.props.history.push('/')
    }
    render() {
        const { favoriteQuotes, removeQuote, onSortEnd, classes } = this.props;
        return (
            <div className={classes.FavoriteQuotes}>
                <AppBar position="static" className={classes.AppBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Favorite Quotes
                        </Typography>
                        <Button onClick={this.goBack} color="inherit" className={classes.goBackBtn}>Go Back<ExitToAppIcon /></Button>
                    </Toolbar>
                </AppBar>
                <SortableQuoteList
                    axis="xy"
                    distance={20}
                    onSortEnd={onSortEnd}
                    favoriteQuotes={favoriteQuotes}
                    removeQuote={removeQuote}
                />
            </div>
        )
    }
}

export default (withStyles(styles)(FavoriteQuotes));