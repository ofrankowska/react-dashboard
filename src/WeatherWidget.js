import React, { Component } from 'react';
import WeatherForecast from './WeatherForecast';
import WeatherMetaForm from './WeatherMetaForm';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import classNames from "classnames";


class WeatherWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "Swinoujscie",
            country: "pl",
            formShowing: false,

        }
        this.updateLocation = this.updateLocation.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);

    }
    showForm() {
        this.setState({
            formShowing: true
        })
    }
    hideForm() {
        this.setState({
            formShowing: false
        })
    }
    updateLocation(city, country) {
        this.setState({ city, country })
    }
    render() {
        const { country, city, formShowing } = this.state;
        const { isEvening } = this.props;
        const weatherForecast = (
            <WeatherForecast isEvening={isEvening} country={country} city={city} showForm={this.showForm} />
        )
        const addLocation = (
            <div>
                <h5>WEATHER</h5>
                <IconButton
                    color='inherit'
                    aria-label='Add city weather'
                    onClick={this.showForm}
                    className={classNames()}
                >
                    <AddCircleOutlineIcon fontSize='large' />
                </IconButton>
            </div>
        )
        return (
            <div>
                {country.length === 0 ? addLocation : weatherForecast}

                {formShowing && <WeatherMetaForm updateLocation={this.updateLocation} hideForm={this.hideForm} />
                }

            </div>
        )
    }
}

export default WeatherWidget