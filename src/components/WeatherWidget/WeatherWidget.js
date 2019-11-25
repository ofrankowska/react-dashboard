import React, { PureComponent } from 'react';
import Weather from './Weather';
import WeatherMetaForm from './WeatherMetaForm';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const WEATHER_API_KEY = "3190d1d029a812e6a5365798e442ad0b";
const WEATHER_API_BASE = "https://api.openweathermap.org/data/2.5/weather?q=";

class WeatherWidget extends PureComponent {
    constructor(props) {
        super(props);
        const location = JSON.parse(window.localStorage.getItem("location"));
        this.state = {
            city: location.city || "",
            country: location.country || "",
            formShowing: false,
            temperature: "",
            id: "",
            weatherLoading: false,
        }
        this.getData = this.getData.bind(this);
        this.updateLocation = this.updateLocation.bind(this);
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);

    }
    componentDidMount() {
        if (this.state.city && this.state.country) {
            this.getData();
        }
    }

    async locationExists(city, country) {
        const res = await fetch(`${WEATHER_API_BASE}${city},${country}&appid=${WEATHER_API_KEY}`);
        return res.status === 404 ? false : true;
    }
    updateLocation(city, country) {
        this.setState({ city, country, weatherLoading: true }, () => this.getData());
        window.localStorage.setItem("location", JSON.stringify({ city, country }));
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
            }, () => this.setState({ weatherLoading: false }));
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
        const { country, city, formShowing, temperature, id, weatherLoading } = this.state;
        const { isEvening } = this.props;
        const weather = (
            <Weather isEvening={isEvening} country={country} city={city} showForm={this.showForm} temperature={temperature} id={id} />
        );
        const addLocationBtn = (
            <>
                <h5>WEATHER</h5>
                <IconButton
                    color='inherit'
                    aria-label='Edit weather location'
                    onClick={this.showForm}
                >
                    <AddCircleOutlineIcon fontSize='large' />
                </IconButton>
            </>
        );
        return (
            <div>
                {country && city ? (weatherLoading ? <LoadingSpinner /> : weather) : addLocationBtn}
                <WeatherMetaForm updateLocation={this.updateLocation} hideForm={this.hideForm} open={formShowing} locationExists={this.locationExists} />
            </div>
        )
    }
}

export default WeatherWidget