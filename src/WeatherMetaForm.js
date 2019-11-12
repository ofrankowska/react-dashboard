import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import { withStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";


const styles = {
    content: {
        paddingBottom: "50px"
    },
    alert: {
        backgroundColor: "rgba(255, 0, 0, 0.7)",
        padding: "10px",
        borderRadius: "10px",
        color: 'white',
        animation: "$fade-in 0.7s ease-out",
    },
    "@keyframes fade-in": {
        "0%": { opacity: 0, transform: "translateY(-40px)" },
        "30%": { transform: "translateY(20px)" },
        "50%": { transform: "translateY(0)" },
        "100%": { opaity: 1 }
    },
    input: {
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
            countryCode: "",
            alertIsShowing: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule("isLengthCorrect", value =>
            value.length === 2
        );
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleClose() {
        this.props.hideForm();
        this.setState({
            city: "",
            countryCode: "",
            alertIsShowing: false
        })
    }
    async handleSubmit(e) {
        const { city, countryCode } = this.state;
        if (await this.props.locationExists(city, countryCode)) {
            this.props.updateLocation(city, countryCode);
            this.handleClose();
        } else {
            this.setState({alertIsShowing: true})
        }
    }
    render() {
        const { city, countryCode, alertIsShowing } = this.state;
        const { classes, open } = this.props;
        return (
            <Dialog open={open} onClose={this.handleClose}>
                <DialogTitle>Choose weather location</DialogTitle>
                <Divider />
                <ValidatorForm onSubmit={this.handleSubmit} instantValidate={false}>
                    <DialogContent className={classes.content}>
                        {alertIsShowing && <p className={classes.alert}>Sorry, couldn't find this location.</p>}
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
                            validators={["required", "isLengthCorrect"]}
                            errorMessages={["Enter Country Code", "Country Code should be 2-letters long"]}
                            className={classes.input}
                        />

                    </DialogContent>
                    <Divider />
                    <DialogActions>
                        <Button
                            type='submit'
                            variant="contained"
                            className={classes.submitBtn}>
                            Add Location
                            </Button>
                        <Button
                            onClick={this.handleClose}
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