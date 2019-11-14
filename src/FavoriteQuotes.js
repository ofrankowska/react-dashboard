import React, { Component } from 'react';
import QuoteBox from './QuoteBox';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    FavoriteQuotes: {
        backgroundColor: "rgb(218, 222, 231)",
        minHeight: "100vh"
    },
    AppBar: {
        backgroundColor: "#1D2636",

    },
    title: {
        marginRight: "auto",
        // textTransform: "uppercase",
    },
    colorBoxes: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "24px",
        margin: "24px"
    },

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
        const { favoriteQuotes, classes } = this.props;
        return (
            <div className={classes.FavoriteQuotes}>
                <AppBar position="static" className={classes.AppBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Favorite Quotes
                        </Typography>
                        <Button onClick={this.goBack} color="inherit">Go Back</Button>
                    </Toolbar>
                </AppBar>
                <section className={classes.colorBoxes}>
                    {favoriteQuotes.map(quote => (
                        <QuoteBox key={quote.id} text={quote.text} author={quote.author} />
                    ))}
                </section>
            </div>
        )
    }
}

export default withStyles(styles)(FavoriteQuotes);