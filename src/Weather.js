import React, { Component } from 'react';
import { WEATHER_API_KEY, WEATHER_API_BASE } from './constants';

import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faCloudSun, faCloudMoon, faCloud, faCloudShowersHeavy, faCloudSunRain, faCloudMoonRain, faBolt, faSnowflake, faSmog } from '@fortawesome/free-solid-svg-icons';
import CreateIcon from "@material-ui/icons/Create";
import { IconButton } from '@material-ui/core';
import classNames from "classnames";


const styles = {
    icon: {
        fontSize: "4em",
        margin: "10px"
    },
    text: {
        margin: 0
    },
    changeBtn: {
        padding: 0,
        paddingLeft: "2px",
        "& svg": {
            fontSize: "16px"
        }
    }
}

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            temperature: "",
            description: "",
        }
    }
    async componentDidMount() {
        const { city, country } = this.props;
        const res = await fetch(`${WEATHER_API_BASE}${city},${country}&appid=${WEATHER_API_KEY}`);
        const data = await res.json();
        this.setState({
            city,
            country,
            temperature: this.toCelcius(data.main.temp),
            description: data.weather[0].main
        })
        console.log(data)
    }
    toCelcius(celvin) {
        return Math.round((celvin - 273.15) * 10) / 10;
    }
    render() {
        const { temperature, description } = this.state;
        const { classes, isEvening, city, country } = this.props;
        const weather_icons = {
            Clear: [faSun, faMoon],
            // : [faCloudSun, faCloudMoon],
            Clouds: [faCloud, faCloud],
            // "broken clouds": [faCloud, faCloud],
            // : faCloudShowersHeavy,
            Rain: [faCloudSunRain, faCloudMoonRain],
            Thunderstorm: [faBolt, faBolt],
            Snow: [faSnowflake, faSnowflake],
            Atmosphere: [faSmog, faSmog]

        }
        return (
            <div>
                <h5 className={classes.text}>
                    {city.toUpperCase()} ({country.toUpperCase()})
                    <IconButton
                        color='inherit'
                        aria-label='Change city weather'
                        onClick={() => console.log('test')}
                        className={classNames(classes.changeBtn)}
                    >
                        <CreateIcon/>
                    </IconButton>

                </h5>
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