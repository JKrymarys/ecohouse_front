import React from "react";
import { withStyles } from "@material-ui/core";
import Chart from "chart.js";
import { GetHistoricalData } from "../../logic/historicalDataWorker";

const styles = theme => ({});

class HistoricalDataChart extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {};
  }

  componentDidMount() {
    GetHistoricalData().then(data => {
      console.log("GetHistoricalData", data);
      const { tempHouseChartData, tempWeatherChartData } = data;
      this.createChart(tempHouseChartData, tempWeatherChartData);
    });
  }

  createChart = (tempHouseChartData, tempWeatherChartData) => {
    const ctx = "historicalDataChart";
    new Chart(ctx, {
      type: "scatter",
      data: {
        labels: Object.keys(tempHouseChartData),
        datasets: [
          {
            label: "Temp House",
            fill: false,
            data: Object.values(tempHouseChartData),
            backgroundColor: "red",
            borderColor: "red"
          },
          {
            label: "Temp Weather",
            fill: false,
            data: Object.values(tempWeatherChartData),
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
  };

  render() {
    return (
      <div>
        <canvas id="historicalDataChart" width="300" height="150" />
      </div>
    );
  }
}

export default withStyles(styles)(HistoricalDataChart);
