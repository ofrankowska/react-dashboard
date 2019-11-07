import React, { Component } from 'react';
import { WEATHER_API_KEY, WEATHER_API_BASE, WEATHER_ICON_BASE } from './constants';

import { withStyles } from "@material-ui/core/styles";
import { classes } from 'istanbul-lib-coverage';

const styles = {
    text: {
        margin: "2px"
    }
}

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            city: "",
            country: "",
            temperature: "",
            image: "",
            description: "",
        }
        this.getData('Poznan', 'pl')
    }
    async getData(city, country) {
        const res = await fetch(`${WEATHER_API_BASE}${city},${country}&appid=${WEATHER_API_KEY}`);
        const data = await res.json();
        console.log(data)
        this.setState({
            city,
            country,
            temperature: this.toCelcius(data.main.temp),
            image: `${WEATHER_ICON_BASE}${data.weather[0].icon}@2x.png`,
            description: data.weather[0].description
        })
    }
    toCelcius(celvin){
        return Math.round((celvin - 273.15)*10)/10;
    }
    render() {
        const { city, country, temperature, image, description } = this.state;
        const {classes} = this.props;
        return (
            <div>
                <img src={image} alt={description} className={classes.image}/>
                <h1 className={classes.text}>{temperature}&deg;C</h1>
                <h5 className={classes.text}>{city.toUpperCase()} ({country.toUpperCase()})</h5>
            </div>
        )
    }
}

export default withStyles(styles)(Weather);