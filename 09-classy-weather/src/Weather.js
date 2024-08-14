import React from "react";
import Day from "./Day";

class Weather extends React.Component {
  componentWillUnmount() {
    console.log("Weather will unmount");
  }

  render() {
    const {
      temperature_2m_max: maxTemp,
      temperature_2m_min: minTemp,
      time: dates,
      weathercode: codes,
    } = this.props.weather;

    return (
      <div>
        <h2>Weather {this.props.location}</h2>
        <ul className="weather">
          {dates.map((date, index) => (
            <Day
              date={date}
              maxTemp={maxTemp.at(index)}
              minTemp={minTemp.at(index)}
              code={codes.at(index)}
              key={date}
              getWeatherIcon={this.props.getWeatherIcon}
              formatDay={this.props.formatDay}
              isToday={index === 0}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Weather;
