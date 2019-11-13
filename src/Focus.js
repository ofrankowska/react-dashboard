import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

const styles = {
    Focus: {
        fontSize: "30px",
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
};

class Focus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusName: "",
            formIsShowing: true,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ formIsShowing: false });
    }
    render() {
        const { focusName, formIsShowing } = this.state;
        const { classes } = this.props;
        const form = (
            <form onSubmit={this.handleSubmit} style={{ display: "inline-block" }}>
                <TextField
                    id="standard-basic"
                    className={classNames(classes.textField, classes.focusField)}
                    label="What is your focus for today?"
                    margin="normal"
                    value={focusName}
                    name="focusName"
                    onChange={this.handleChange}

                />
            </form>

        );
        return (
            <div className={classes.Focus}>
                {formIsShowing ? form : <p>{focusName}</p>}
            </div>


        )
    }
}

export default withStyles(styles)(Focus);