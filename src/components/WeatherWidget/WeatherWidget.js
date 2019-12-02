import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Weather from './Weather';
import WeatherMetaForm from './WeatherMetaForm';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const WEATHER_API_KEY = '3190d1d029a812e6a5365798e442ad0b';
const WEATHER_API_BASE = 'https://api.openweathermap.org/data/2.5/weather?q=';

class WeatherWidget extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      formShowing: false,
      temperature: 0,
      id: 0,
      weatherLoading: false,
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const location = JSON.parse(window.localStorage.getItem('location'));
    if (location) {
      this.setState({ city: location.city, country: location.country }, () => this.getData());
    }
  }

  async getData() {
    const { city, country } = this.state;
    try {
      const res = await fetch(`${WEATHER_API_BASE}${city},${country}&appid=${WEATHER_API_KEY}`);
      const data = await res.json();
      this.setState(
        {
          city,
          country,
          temperature: this.toCelcius(data.main.temp),
          id: data.weather[0].id,
        },
        () => this.setState({ weatherLoading: false }),
      );
    } catch (error) {
      this.setState({ country: '', city: '' });
    }
  }

  toCelcius = celvin => Math.round((celvin - 273.15) * 10) / 10;

  updateLocation = (city, country) => {
    this.setState({ city, country, weatherLoading: true }, () => this.getData());
    window.localStorage.setItem('location', JSON.stringify({ city, country }));
  };

  showForm = () => {
    this.setState({
      formShowing: true,
    });
  };

  hideForm = () => {
    this.setState({
      formShowing: false,
    });
  };

  async locationExists(city, country) {
    const res = await fetch(`${WEATHER_API_BASE}${city},${country}&appid=${WEATHER_API_KEY}`);
    return res.status !== 404;
  }

  render() {
    const { country, city, formShowing, temperature, id, weatherLoading } = this.state;
    const { isEvening } = this.props;
    const weather = (
      <Weather
        isEvening={isEvening}
        country={country}
        city={city}
        showForm={this.showForm}
        temperature={temperature}
        id={id}
      />
    );
    const addLocationBtn = (
      <>
        <h5>WEATHER</h5>
        <IconButton color="inherit" aria-label="Edit weather location" onClick={this.showForm}>
          <AddCircleOutlineIcon fontSize="large" />
        </IconButton>
      </>
    );
    return (
      <>
        {country && city && !weatherLoading && weather}
        {country && city && weatherLoading && <LoadingSpinner />}
        {(!country || !city) && addLocationBtn}
        <WeatherMetaForm
          updateLocation={this.updateLocation}
          hideForm={this.hideForm}
          open={formShowing}
          locationExists={this.locationExists}
        />
      </>
    );
  }
}

WeatherWidget.propTypes = {
  isEvening: PropTypes.bool.isRequired,
};

export default WeatherWidget;
