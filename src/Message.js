import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles(theme => ({
    Message: {
        color: "white",
        fontSize: "48px",
        paddingTop: "10px",
        fontWeight: 500,
        "& .MuiFormControl-root": {
            margin: 0,
        },
    },
    
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        // display: "inline-block",
        "& input, label": {
            color: "white",

        },
        "& label:active": {
            color: "white",
            fontSize: "25px",

        },
        "& label.MuiFormLabel-filled": {
            display: "none",
        },

        '& label.Mui-focused': {
            color: 'white',
            fontSize: "25px",
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
    },
    userNameField: {
        width: 420,
        bottom: "19px",
        "& input": {
            textAlign: "left",
            fontSize: "48px",
        },
        "& label": {
            fontSize: "48px",
        },


    },
    focusField: {
        width: 400,
        "& input": {
            fontSize: "30px",
            textAlign: "center"
        },
        "& label": {
            fontSize: "30px", 
        },

    },
    
}));

function Message(props) {
    const classes = useStyles();
    const {isMorning, isAfternoon} = props;
    const greeting = isMorning ? "Good Morning" : isAfternoon ? "Good Afternoon" : "Good Evening";
    return (
        <section className={classes.Message}>
            <div className={classes.userName}>
                <span>{greeting},</span>
                <TextField
                    id="standard-basic"
                    className={classNames(classes.textField, classes.userNameField)}
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