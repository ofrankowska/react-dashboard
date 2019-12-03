import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './WeatherMetaFormStyles';

class WeatherMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      countryCode: '',
      alertIsShowing: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isLengthCorrect', value => value.length === 2);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClose = () => {
    const { hideForm } = this.props;
    hideForm();
    this.setState({
      city: '',
      countryCode: '',
      alertIsShowing: false,
    });
  };

  async handleSubmit(e) {
    const { city, countryCode } = this.state;
    const { locationExists, updateLocation } = this.props;
    if (await locationExists(city, countryCode)) {
      updateLocation(city, countryCode);
      this.handleClose();
    } else {
      this.setState({ alertIsShowing: true });
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
            {alertIsShowing && (
              <p className={classes.alert}>Sorry, could not find this location.</p>
            )}
            <TextValidator
              label="City"
              value={city}
              name="city"
              onChange={this.handleChange}
              fullWidth
              validators={['required']}
              errorMessages={['Enter City Name']}
              className={classes.input}
            />
            <TextValidator
              label="Two-letter Country Code"
              value={countryCode}
              name="countryCode"
              onChange={this.handleChange}
              fullWidth
              validators={['required', 'isLengthCorrect']}
              errorMessages={['Enter Country Code', 'Country Code should be 2-letters long']}
              className={classes.input}
            />
          </DialogContent>
          <Divider />
          <DialogActions>
            <Button type="submit" variant="contained" className={classes.submitBtn}>
              Add Location
            </Button>
            <Button onClick={this.handleClose} variant="contained" className={classes.cancelBtn}>
              Cancel
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    );
  }
}

WeatherMetaForm.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  locationExists: PropTypes.func.isRequired,
  updateLocation: PropTypes.func.isRequired,
  hideForm: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(WeatherMetaForm);
