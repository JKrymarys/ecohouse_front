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

let chartObject = null;

class HistoricalDataChart extends React.Component {
  componentDidMount() {
    this.createChart();
    this.getAndSetHistoricalData();
    this.updateChartTimer();
  }

  getAndSetHistoricalData() {
    return GetHistoricalData().then(data => {
      const { tempHouseChartData, tempWeatherChartData } = data;
      chartObject.data.datasets = [
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
      ];
      chartObject.data.labels = Object.keys(tempHouseChartData);
      chartObject.update();
    });
  }

  updateChartTimer() {
    this.timerID = setInterval(() => {
      console.log("chartObject", chartObject);
      this.getAndSetHistoricalData();
    }, 60000);
  }
  createChart = () => {
    // const { tempHouseChartData, tempWeatherChartData } = this.state;
    const ctx = "historicalDataChart";
    chartObject = new Chart(ctx, {
      type: "line",
      data: {
        labels: [],
        datasets: []
      },
      options: {
        animation: false,
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
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "Temperature (°C)"
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
