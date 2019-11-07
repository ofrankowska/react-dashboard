import React, { Component } from 'react';
import { WEATHER_API_KEY, WEATHER_API_BASE } from './constants';

import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faSmog } from '@fortawesome/free-solid-svg-icons';

const styles = {
    icon: {
        fontSize: "4em",
        margin: "10px"
    },
    text: {
        margin: 0
    }
}

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            city: "",
            country: "",
            temperature: "",
            description: "",
        }
        this.getData('Poznan', 'pl')
    }
    async getData(city, country) {
        const res = await fetch(`${WEATHER_API_BASE}${city},${country}&appid=${WEATHER_API_KEY}`);
        const data = await res.json();
        this.setState({
            city,
            country,
            temperature: this.toCelcius(data.main.temp),
            description: data.weather[0].description
        })
    }
    toCelcius(celvin) {
        return Math.round((celvin - 273.15) * 10) / 10;
    }
    render() {
        const { city, country, temperature, description } = this.state;
        const { classes, isEvening } = this.props;
        const weather_icons = {
            "clear sky": [faSun, faMoon],
            "few clouds": [faCloudSun, faCloudMoon],
            "scattered clouds": [faCloud, faCloud],
            "broken clouds": [faCloud, faCloud],
            "shower rain": faCloudShowersHeavy,
            rain: [faCloudSunRain, faCloudMoonRain],
            thunderstorm: [faBolt, faBolt],
            snow: [faSnowflake, faSnowflake],
            mist: [faSmog, faSmog]

        }
        return (
            <div>
                <h5 className={classes.text}>{city.toUpperCase()} ({country.toUpperCase()})</h5>
                {description &&
                    <FontAwesomeIcon
                        className={classes.icon}
                        icon={isEvening ? weather_icons[description][1] : weather_icons[description][0]}
                    />
                }
                <h1 className={classes.text}>{temperature}&deg;C</h1>
            </div>
        )
    }
}

export default withStyles(styles)(Weather);