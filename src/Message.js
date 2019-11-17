import React, { Component } from 'react'
import styles from './styles/MessageStyles';

import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import CreateIcon from "@material-ui/icons/Create";
import { IconButton } from '@material-ui/core';

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
                    size="1"
                />
            </form>
        );
        const nameDisplay = (
            <span>
                {userName}
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
                <span>{greeting}, </span>
                {formIsShowing ? formDisplay : nameDisplay}

            </div>
        )
    }
}

export default withStyles(styles)(Message);