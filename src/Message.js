import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = {
    Message: {
        fontSize: "48px",
        paddingTop: "10px",


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
        const form = (
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
        return (
            <div className={classes.Message}>
                <span>{greeting},</span>
                {formIsShowing ? form : <span> {userName}</span>}
            </div>
        )
    }
}

export default withStyles(styles)(Message);