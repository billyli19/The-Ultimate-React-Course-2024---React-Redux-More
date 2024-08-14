import React from "react";

class Day extends React.Component {
  render() {
    const { date, maxTemp, minTemp, code, getWeatherIcon, formatDay, isToday } =
      this.props;

    return (
      <li className="day">
        <span>{getWeatherIcon(code)}</span>
        <p>{isToday ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(minTemp)}&deg; &mdash;{" "}
          <strong>{Math.ceil(maxTemp)}&deg;</strong>;
        </p>
      </li>
    );
  }
}

export default Day;
