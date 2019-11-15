import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = {
        "@global": {
        ".fade-exit": {
            opacity: 1,
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: "opacity 0.5s ease-out 1s"
        }
    },

    quote: {
        margin: 0,
        "& p": {
            marginTop: 0,
            marginBottom: "3px",
        },
        "& footer": {
            fontWeight: 400,
            fontSize: "14px"
        },
    },

}
function Quote(props) {
    const { author, text, classes } = props;
    return (
            <blockquote className={classes.quote}>
                <p>"{text}"</p>
                {author && <footer>- {author}</footer>}
            </blockquote>

    )
}

export default withStyles(styles)(Quote);