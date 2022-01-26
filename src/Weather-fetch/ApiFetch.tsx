import React from "react";
import LocalWeather from "./DisplayWeather/DisplayFetch";

type WeatherState = {
  latitude: number;
  longitude: number;
  weatherApiUrl: string;
  weatherApiKey: string;
  temperature: number;
};

class Fetch extends React.Component<{}, WeatherState> {
  componentWillMount() {
    this.setState({
      weatherApiKey: "16bfd0882021f8b50da9acac7d8ee70d",
      temperature: 0,
    });

    this.getLocation();
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition((where) => {
      this.setState({
        latitude: where.coords.latitude,
        longitude: where.coords.longitude,
        weatherApiUrl: `https://api.openweathermap.org/data/2.5/onecall?lat=${where.coords.latitude}&lon=${where.coords.longitude}&appid=${this.state.weatherApiKey}`,
      });
    });
  };

  weatherAPI = () => {
    fetch(this.state.weatherApiUrl)
      .then((response) => {
        return response.json();
      })
      .then((weather) => {
        this.setState({
          temperature: weather.current.temp,
        });
      })
      .catch((error) => console.log("Error:", error));
  };

  render() {
    return (
      <div className="App-header">
        <div className="App-header">
          <LocalWeather temperature={this.state.temperature} />
        </div>
        <br />
        <button onClick={() => this.weatherAPI()}>How cold is it?</button>
      </div>
    );
  }
}

export default Fetch;
