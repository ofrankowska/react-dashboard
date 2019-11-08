import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";


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
        const { hideForm } = this.props;
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
                        />
                        <TextValidator
                            label='Two-letter Country Code'
                            value={countryCode}
                            name='countryCode'
                            onChange={this.handleChange}
                            fullWidth
                            validators={["required"]}
                            errorMessages={["Enter Country Code"]}
                        />

                    </DialogContent>

                    <DialogActions>
                        <Button type='submit'>Submit</Button>
                        <Button onClick={hideForm} color="primary">
                                Cancel
                    </Button>

                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        )
    }
}

export default WeatherMetaForm;