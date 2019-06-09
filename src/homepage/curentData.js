import React from "react";
import axios from "axios";

class CurrentData extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = { currentCity: "-", currentTemp: 0, currentHumidity: 0};
  }

  componentDidMount() {
    let fiveDays3hoursApi =
      "https://api.openweathermap.org/data/2.5/forecast?id=3093133&appid=3c786bff59e49394d1d9b34220351622&units=metric";
    let currentWatherApi =
      "https://api.openweathermap.org/data/2.5/weather?id=3093133&appid=3c786bff59e49394d1d9b34220351622&units=metric";

    axios.get(currentWatherApi).then(data => {
      let tempData = data.data;
      console.log("tempData", tempData);

      this.setState(prevState => ({
        currentCity: tempData.name,
        currentTemp: tempData.main.temp,
        currentHumidity: tempData.main.humidity
      }));
      //currentWatherData = data.data;
      //console.log("currentWeatherData", this.state.currentWatherData);
    });
  }

  render() {
    return (
      <div>
        <h3> City: {this.state.currentCity} </h3>
        <h3> Temperature in {this.state.currentCity} : {this.state.currentTemp} </h3>
        <h3> Humidity in {this.state.currentCity} : {this.state.currentHumidity} %</h3>
      </div>
    );
  }
}

export default CurrentData;
