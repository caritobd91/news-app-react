import React, { Component } from 'react';

const url = "https://api.darksky.net/forecast/1d67db599e3f019a24aeb1dfd367f9fd/37.8267,-122.4233";

class Weather extends Component {
  constructor() {
    super();
    this.state = { weather: [] };
  }

  async getWeather() {
    let result = await fetch(url, {
      mode: "no-cors"
    }).then(response => response.json())
    .catch(() => {
      console.log("Could not access Dark Sky.")
    });

    console.log(result);
    return result.weather;
  }

  componentWillMount() {
    this.getWeather().then(
      forecast => this.setState({weather: forecast})
    );
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Weather;