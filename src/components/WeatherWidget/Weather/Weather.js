import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faCloud,
  faCloudSunRain,
  faCloudMoonRain,
  faBolt,
  faSnowflake,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';
import CreateIcon from '@material-ui/icons/Create';
import { IconButton } from '@material-ui/core';
import classNames from 'classnames';
import styles from './WeatherStyles';

const WEATHER_ICONS = {
  thunderstorm: [faBolt, faBolt],
  drizzle: [faCloudSunRain, faCloudMoonRain],
  rain: [faCloudSunRain, faCloudMoonRain],
  snow: [faSnowflake, faSnowflake],
  atmosphere: [faSmog, faSmog],
  clear: [faSun, faMoon],
  clouds: [faCloud, faCloud],
};

const Weather = ({ classes, isEvening, city, country, showForm, temperature, id }) => {
  const icon = () => {
    if (id <= 232) return WEATHER_ICONS.thunderstorm;
    if (id <= 321) return WEATHER_ICONS.drizzle;
    if (id <= 531) return WEATHER_ICONS.rain;
    if (id <= 622) return WEATHER_ICONS.snow;
    if (id <= 781) return WEATHER_ICONS.atmosphere;
    if (id === 800) return WEATHER_ICONS.clear;
    return WEATHER_ICONS.clouds;
  };

  return (
    <Grid container direction="column" justify="center">
      <Grid item>
        <h5 className={classes.text}>
          {city.toUpperCase()} ({country.toUpperCase()})
          <IconButton
            color="inherit"
            aria-label="Change city weather"
            onClick={showForm}
            className={classNames(classes.editBtn)}
          >
            <CreateIcon />
          </IconButton>
        </h5>
      </Grid>
      <Grid item>
        <FontAwesomeIcon className={classes.icon} icon={isEvening ? icon()[1] : icon()[0]} />
      </Grid>
      <Grid item>
        <h1 className={classes.text}>{temperature}&deg;C</h1>
      </Grid>
    </Grid>
  );
};

Weather.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  isEvening: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  showForm: PropTypes.func.isRequired,
  temperature: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default withStyles(styles)(Weather);
