import React from "react";
import { withStyles, Paper } from "@material-ui/core";
import { GetCurrentWeather } from "../../logic/homepageApiWorker";

const styles = theme => ({
  infoPaper: {
    textAlign: "center",
    marginTop: 20,
    width: "100%"
  }
});

class CurentDataForecast extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = { currentCity: "-", currentTemp: 0, currentHumidity: 0 };
  }

  componentDidMount() {
    GetCurrentWeather().then(result => {
      this.setState({
        currentCity: result.name,
        currentTemp: result.main.temp,
        currentHumidity: result.main.humidity,
        currentPressure: result.main.pressure
      });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.infoPaper}>
        <h4> Weather forecast for : {this.state.currentCity} </h4>
        <h4> Current temperature : {this.state.currentTemp} </h4>
        <h4> Current pressure : {this.state.currentPressure} hPa </h4>
        <h4>
          Humidity in {this.state.currentCity} : {this.state.currentHumidity} %
        </h4>
      </Paper>
    );
  }
}

export default withStyles(styles)(CurentDataForecast);
