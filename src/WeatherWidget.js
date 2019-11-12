import React, { PureComponent } from 'react';
import Weather from './Weather';
import WeatherMetaForm from './WeatherMetaForm';
import { WEATHER_API_KEY, WEATHER_API_BASE } from './constants';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import classNames from "classnames";


class WeatherWidget extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            country: "",
            formShowing: false,
            temperature: "",
            id: "",
        }
        this.getData = this.getData.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);

    }
    async locationExists(city, country) {
        const res = await fetch(`${WEATHER_API_BASE}${city},${country}&appid=${WEATHER_API_KEY}`);
        return res.status === 404 ? false : true;
    }
    updateLocation(city, country) {
        this.setState({ city, country }, () => this.getData());
    }
    async getData() {
        const { city, country } = this.state;
        try {
            const res = await fetch(`${WEATHER_API_BASE}${city},${country}&appid=${WEATHER_API_KEY}`);
            const data = await res.json();
            this.setState({
                city,
                country,
                temperature:
                    this.toCelcius(data.main.temp),
                id:
                    data.weather[0].id
            });
            console.info(data)
        } catch (error) {
            console.error('Failed to fetch data')
            this.setState({ country: "", city: "" });
        }

    };
    toCelcius(celvin) {
        return Math.round((celvin - 273.15) * 10) / 10;
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
    render() {
        const { country, city, formShowing, temperature, id } = this.state;
        const { isEvening } = this.props;
        const weather = (
            <TransitionGroup>
                <CSSTransition key={city}  classNames="fade" timeout={300}>
                    <Weather isEvening={isEvening} country={country} city={city} showForm={this.showForm} temperature={temperature} id={id} />
                </CSSTransition>
            </TransitionGroup>
        );
        const addLocationBtn = (
            <div>
                <h5>WEATHER</h5>
                <IconButton
                    color='inherit'
                    aria-label='Add city weather'
                    onClick={this.showForm}
                >
                    <AddCircleOutlineIcon fontSize='large' />
                </IconButton>
            </div>
        );
        return (
            <div>
                {country && city ? weather : addLocationBtn}
                <WeatherMetaForm updateLocation={this.updateLocation} hideForm={this.hideForm} open={formShowing} locationExists={this.locationExists} />

            </div>
        )
    }
}

export default WeatherWidget