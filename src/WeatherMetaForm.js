import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const styles = {
    input: {
        // "& input, label": {
        //     color: "white",

        // },
        "& label:active, label.Mui-focused": {
            color: "#5CA19E",
        },
        '& label.Mui-focused': {
            color: '#5CA19E',
        },
        '& .MuiInput-underline:after:before': {
            borderBottomColor: '#5CA19E',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#5CA19E',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#5CA19E',
            },
        },
    },
    submitBtn: {
        backgroundColor: "rgb(45, 47, 56)",
        color: "white"
    },
    cancelBtn: {
        backgroundColor: "#5CA19E",
        color: "white"


    }
};

class WeatherMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            countryCode: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        // e.preventDefault();
        this.props.updateLocation(this.state.city, this.state.countryCode);
        this.props.hideForm();
    }
    render() {
        const { city, countryCode } = this.state;
        const { hideForm, classes } = this.props;
        return (
            <Dialog open={true}>
                <DialogTitle>Choose weather location</DialogTitle>
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <DialogContent>
                        <TextValidator
                            label='City'
                            value={city}
                            name='city'
                            onChange={this.handleChange}
                            fullWidth
                            validators={["required"]}
                            errorMessages={["Enter City"]}
                            className={classes.input}
                        />
                        <TextValidator
                            label='Two-letter Country Code'
                            value={countryCode}
                            name='countryCode'
                            onChange={this.handleChange}
                            fullWidth
                            validators={["required"]}
                            errorMessages={["Enter Country Code"]}
                            className={classes.input}
                        />

                    </DialogContent>

                    <DialogActions>
                        <Button
                            type='submit'
                            variant="contained"
                            className={classes.submitBtn}>
                            Add Location
                            </Button>
                        <Button
                            onClick={hideForm}
                            variant="contained"
                            className={classes.cancelBtn}
                        >
                            Cancel
                    </Button>

                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        )
    }
}

export default withStyles(styles)(WeatherMetaForm);