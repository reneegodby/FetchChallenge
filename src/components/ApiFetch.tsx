import React from "react";
import DisplayFetch from "./DisplayFetch";

class Fetch extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      lat: "",
      long: "",
    };
  }

  fetchLocation() {
    const baseUrl: string = "https://api.openweathermap.org/data/2.5/weather";
    const key: string = "16bfd0882021f8b50da9acac7d8ee70d";
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.altitude,
        long: position.coords.longitude,
        url: `${baseUrl}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${key}`,
      });
      this.fetchWeather();
    });
  }

  fetchWeather = () => {
    
    fetch(this.state.url)
      .then((res) => res.json())
      .then((openWeatherApiResults) => {
        

        this.setState({
          temperature: openWeatherApiResults.main.temp.toFixed(0),
          feelsLike: openWeatherApiResults.main.feels_like.toFixed(0),
          humidity: openWeatherApiResults.main.humidity,
          windSpeed: openWeatherApiResults.wind.speed,
        });
      });
  };

  componentDidMount = () => {
    this.fetchLocation();
  };

  render() {
    console.log("render");
    return (
      <div className="body">
        <h1>The current weather in your area:</h1>
        <hr />
        <DisplayFetch
          temp={this.state.temperature}
          feels={this.state.feelsLike}
          humidity={this.state.humidity}
          speed={this.state.windSpeed}
        />
      </div>
    );
  }
}
export default Fetch;
