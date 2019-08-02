import React from "react";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import { currentWatherApi } from "../../env"

class CurentDataForecast extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = { currentCity: "-", currentTemp: 0, currentHumidity: 0};
  }

  componentDidMount() {
   

    axios.get(currentWatherApi).then(data => {
      let tempData = data.data;
      console.log("tempData", tempData);

      // this.setState(prevState => ({
      //   currentCity: tempData.name,
      //   currentTemp: tempData.main.temp,
      //   currentHumidity: tempData.main.humidity,
      //   currentPressure: tempData.main.pressure,
      // }));
      //currentWatherData = data.data;
      //console.log("currentWeatherData", this.state.currentWatherData);
    });

  }

  render() {
    return (
      <Paper>
        <h3> Weather forecast for : {this.state.currentCity} </h3>
        <h3> Current temperature : {this.state.currentTemp} </h3>
        <h3> Current pressure  : {this.state.currentPressure} hPa </h3>
        <h3> Humidity in {this.state.currentCity} : {this.state.currentHumidity} %</h3>
        </Paper>
    );
  }
}

export default CurentDataForecast;
