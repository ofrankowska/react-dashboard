import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CreateIcon from "@material-ui/icons/Create";
import { IconButton } from '@material-ui/core';

const styles = {
    Message: {
        fontSize: "48px",
        paddingTop: "10px",
        "&:hover svg": {
            opacity: 0.7,
            transition: "opacity 0.3s ease-in"
        }
    },
    textField: {
        "& input, label": {
            color: "white",
            fontWeight: 500,
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
        width: 430,
        bottom: "21px",
        "& input": {
            textAlign: "left",
            fontSize: "48px",
        },
        "& label": {
            fontSize: "48px",
        },
    },
    editBtn: {
        position: "absolute",
        padding: "10px",
        "& svg": {
            fontSize: "38px",
            opacity: 0
        }
    }

};

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            formIsShowing: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const userName = JSON.parse(window.localStorage.getItem("userName"));
        if (userName) {
            this.setState({
                userName,
                formIsShowing: false
            })
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ formIsShowing: false });
        window.localStorage.setItem("userName", JSON.stringify(this.state.userName));
    }
    render() {
        const { isMorning, isAfternoon, classes } = this.props;
        const { userName, formIsShowing } = this.state;
        const greeting = (isMorning ? "Good Morning" : (isAfternoon ? "Good Afternoon" : "Good Evening"));
        const formDisplay = (
            <form onSubmit={this.handleSubmit} style={{ display: "inline-block" }}>
                <TextField
                    id="standard-basic"
                    className={classNames(classes.textField, classes.userNameField)}
                    label="what is your name?"
                    margin="normal"
                    style={{ color: "white" }}
                    value={this.state.userName}
                    name="userName"
                    onChange={this.handleChange}
                />
            </form>
        );
        const nameDisplay = (
            <span>
                {' '}{userName}
                <IconButton
                    color='inherit'
                    aria-label='Edit your name'
                    onClick={() => this.setState({ formIsShowing: true })}
                    className={classNames(classes.editBtn)}
                >
                    <CreateIcon />
                </IconButton>
            </span>

        )
        return (
            <div className={classes.Message}>
                <span>{greeting},</span>
                {formIsShowing ? formDisplay : nameDisplay}

            </div>
        )
    }
}

export default withStyles(styles)(Message);