import React from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core";
import { allHouseDataEntries, allWeatherEntries } from "../../env";
import Chart from "chart.js";

const styles = theme => ({});

class HistoricalDataChart extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {};
  }

  componentDidMount() {
    const ctx = "historicalDataChart";
    var tempHouseTemperatures = {};
    var tempWeatherTemperatures = {};

    function getAllHouseData() {
      return axios.get(allHouseDataEntries);
    }
    function getAllWeatherData() {
      return axios.get(allWeatherEntries);
    }

    axios
      .all([getAllWeatherData(), getAllHouseData()])
      .then(
        axios.spread((weather, housedata) => {
          weather.data[0].forEach(el => {
            tempWeatherTemperatures[el.datetime.value] = el.temp;
          });
          housedata.data[0].forEach(el => {
            tempHouseTemperatures[el.datetime.value] = el.temp_house;
          });
        })
      )
      .then(() => {
        let myChart = new Chart(ctx, {
          type: "scatter",
          data: {
            labels: Object.keys(tempHouseTemperatures),
            datasets: [
              {
                label: "Temp House",
                fill: false,
                data: Object.values(tempHouseTemperatures),
                backgroundColor: "red",
                borderColor: "red"
              },
              {
                label: "Temp Weather",
                fill: false,
                data: Object.values(tempWeatherTemperatures),
                backgroundColor: "blue",
                borderColor: "blue"
              }
            ]
          },
          options: {
            scales: {
              xAxes: [
                {
                  type: "time",
                  distribution: "linear",
                  time: {
                    round: "minute"
                    // unit: "hour",
                    // stepSize: "2",
                    // displayFormats: {
                    //   day: "MMM D",
                    //   hour: "MMM D h:mm a"
                    // }
                  },
                  scaleLabel: {
                    display: true,
                    labelString: "Date"
                  }
                }
              ]
            }
          }
        });
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <canvas id="historicalDataChart" width="300" height="150" />
      </div>
    );
  }
}

export default withStyles(styles)(HistoricalDataChart);
