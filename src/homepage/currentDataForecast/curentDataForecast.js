import React from "react";
import axios from "axios";
import {withStyles, Paper}  from '@material-ui/core';
import { currentWatherApi } from "../../env"


const styles = theme => ({
  infoPaper: {
    textAlign: "center",
    margin: 20,
    width: "100%"
  }
})

class CurentDataForecast extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = { currentCity: "-", currentTemp: 0, currentHumidity: 0};
  }

  componentDidMount() {
   

    axios.get(currentWatherApi).then(data => {
      let tempData = data.data;
      console.log("tempData", tempData);

      this.setState(prevState => ({
        currentCity: tempData.name,
        currentTemp: tempData.main.temp,
        currentHumidity: tempData.main.humidity,
        currentPressure: tempData.main.pressure,
      }));
      
      // currentWatherData = data.data;
      // console.log("currentWeatherData", tempData);
    });

  }

  render() {
    const {classes } = this.props;
    return (
      <Paper className={classes.infoPaper} >
        <h4> Weather forecast for : {this.state.currentCity} </h4>
        <h4> Current temperature : {this.state.currentTemp} </h4>
        <h4> Current pressure  : {this.state.currentPressure} hPa </h4>
        <h4> Humidity in {this.state.currentCity} : {this.state.currentHumidity} %</h4>
        </Paper>
    );
  }
}

export default withStyles(styles)(CurentDataForecast);
