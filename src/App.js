import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Weather from './react components/weather.component';
import Form from './react components/form.component';
import "weather-icons/css/weather-icons.css"


const API_key = "b6e4bd1c3d1334f5f86d39d483a629f7";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      celcius: undefined,
      main: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,


    };

    this.WeatherIcon = {
      ThunderStorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  cal_cel(temp) {
    let cel = Math.floor(temp - 273.15)
    return cel;
  }

  get_Weather(icon, Range) {
    switch (true) {
      case Range >= 200 && Range <= 232:
        this.setState({ icon: this.WeatherIcon.ThunderStorm })
        break;


      case Range >= 300 && Range <= 321:
        this.setState({ icon: this.WeatherIcon.Drizzle })
        break;


      case Range >= 500 && Range <= 531:
        this.setState({ icon: this.WeatherIcon.Rain })
        break;


      case Range >= 600 && Range <= 622:
        this.setState({ icon: this.WeatherIcon.Snow })
        break;


      case Range >= 701 && Range <= 781:
        this.setState({ icon: this.WeatherIcon.Atmosphere })
        break;


      case Range >= 801 && Range <= 804:
        this.setState({ icon: this.WeatherIcon.Clouds })
        break;

      case Range = 800:
        this.setState({ icon: this.WeatherIcon.Clear })
        break;

      default:
        this.setState({ icon: this.WeatherIcon.Clouds })

    }
  }


  getWeather = async (e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.Country.value;


    if (city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);

      const responce = await api_call.json();

      console.log(responce)

      this.setState({
        city: `${responce.name} , ${responce.sys.country}`,
        celcius: this.cal_cel(responce.main.temp),
        temp_max: this.cal_cel(responce.main.temp_max),
        temp_min: this.cal_cel(responce.main.temp_min),
        description: responce.weather[0].description,

      })

      this.get_Weather(this.WeatherIcon, responce.weather[0].id)
    }

    else {
      this.setState({ error: true })
    }


  }

  render() {
    return (
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error} />
        <Weather city={this.state.city}
          country={this.state.country}
          temp_cel={this.state.celcius}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          description={this.state.description}
          WeatherIcon={this.state.icon} />
      </div>
    )
  }
}

export default App;
