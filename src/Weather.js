import React, { Component } from 'react';
import { WEATHER_API_KEY, WEATHER_API_BASE } from './constants';

export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            city: "",
            country: "",
            temperature: ""
        }
        this.getData('London', 'uk')
    }
    async getData(city, country) {
        const res = await fetch(`${WEATHER_API_BASE}${city},${country}&appid=${WEATHER_API_KEY}`);
        const data = await res.json();
        console.log(data)
        this.setState({
            city,
            country,
            temperature: this.toCelcius(data.main.temp),
        })
    }
    toCelcius(celvin){
        return Math.round((celvin - 273.15)*10)/10;
    }
    render() {
        const { city, country, temperature } = this.state;
        return (
            <div>
                <h1>{city.toUpperCase()}, ({country})</h1>
                <h3>{temperature}&deg;</h3>
            </div>
        )
    }
}

