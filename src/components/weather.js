import React, { Component } from 'react';

const url = "http://api.openweathermap.org/data/2.5/weather?id=4299276&APPID=6ca05d91658fd6349adc797a8d6acb2a&units=imperial";

class Weather extends Component {
  constructor() {
    super();
    this.state = { weather: [], icon: '', city: ''};
  }

  async getWeather() {
    let result = await fetch(url)
    .then(response => response.json())
    .catch((error) => {
      console.log(error);
    });

    console.log(result);
    return result;
  }

  componentWillMount() {
    this.getWeather().then(
      forecast => {
        this.setState({
          weather: forecast.main,
          icon: forecast.weather[0].icon,
          city: forecast.name
        })
      }
    );
  }

  render() {
    return (
      <div className="weather">
        <h2>{ this.state.weather.temp + '°F' }</h2>
        <img className="icon" alt="weather icon" src={`http://openweathermap.org/img/wn/${this.state.icon}.png`} />
        <p className="city">{ this.state.city + ', KY'}</p>
      </div>
    );
  }
}

export default Weather;
