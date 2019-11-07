import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
    Message: {
        color: "white",
        fontSize: "3em",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 400,
        // display: "inline-block",
        "& input, label": {
            color: "white",
            fontSize: "1.5rem",
            textAlign: "left",
            fontWeight: 500

        },
        "& label:active": {
            color: "white",
            fontWeight: 600
        },
        '& label.Mui-focused': {
            color: 'white',
            fontWeight: 600
        },
        '& .MuiInput-underline:after:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },

        },
    }
    
}));

function Message() {
    const classes = useStyles();
    return (
        <section className={classes.Message}>
            <div>
                <span>Good Afternoon,</span>
                <TextField
                    id="standard-basic"
                    className={classes.textField}
                    label="what is your name?"
                    margin="normal"
                    style={{ color: "white" }}
                />
            </div>
            <div>
                <TextField
                    id="standard-basic"
                    className={classNames(classes.textField, classes.focusField)}
                    label="What is your focus for today?"
                    margin="normal"
                />
            </div>
        </section>
    )
}

export default Message;