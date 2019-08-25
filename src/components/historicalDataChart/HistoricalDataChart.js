import React from "react";
import { withStyles, Paper } from "@material-ui/core";
import Chart from "chart.js";
import { GetHistoricalData } from "../../logic/historicalDataWorker";

const styles = theme => ({
  infoPaper: {
    textAlign: "center",
    marginTop: 20,
    width: "100%"
  }
});

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
      type: "line",
      data: {
        labels: Object.keys(tempHouseChartData),
        datasets: [
          {
            label: "Temp House",
            fill: false,
            data: Object.values(tempHouseChartData),
            backgroundColor: "rgba(255, 69, 0, 0.5)",
            borderColor: "rgba(255, 69, 0, 0.8)"
          },
          {
            label: "Temp Weather",
            fill: false,
            data: Object.values(tempWeatherChartData),
            backgroundColor: "rgba(135,206,250, 0.5)",
            borderColor: "rgba(135,206,250, 0.8)"
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
    const { classes } = this.props;
    return (
      <Paper className={classes.infoPaper}>
        <canvas id="historicalDataChart" />
      </Paper>
    );
  }
}

export default withStyles(styles)(HistoricalDataChart);
