import { Grid, Paper, withStyles } from "@material-ui/core";
import React from "react";

const styles = theme => ({
  infoPaper: {
    width: "100%"
  },
  setMargin: {
    margin: 20
  }
});

class MachineLearningResult extends React.Component {
  createResult(res) {
    if (res === null) return "-";

    const result = Math.round(res);
    if (result === 1) return `OPEN WINDOWS [${res}]`;
    else if (result === 0) return `CLOSE WINDOWS [${res}]`;
  }

  render() {
    const {
      classes,
      isModelTrained,
      predictionData,
      predictionResult,
      lastPredictionTime,
      finalLoss
    } = this.props;

    return (
      <Paper className={classes.infoPaper}>
        <Grid container direction="column">
          <Grid item className={classes.setMargin}>
            <h4>Machine Learning Component</h4>
          </Grid>
          <Grid item className={classes.setMargin}>
            <table>
              <tbody>
                <tr>
                  <td>Weather forecast at:</td>
                  <td>{predictionData.lastWeatherResult.datetime}</td>
                </tr>
                <tr>
                  <td>Temp:</td>
                  <td>{predictionData.lastWeatherResult.temp}</td>
                </tr>
                <tr>
                  <td>Humidity</td>
                  <td> {predictionData.lastWeatherResult.humidity}</td>
                </tr>
                <tr>
                  <td>Pressure:</td>
                  <td>{predictionData.lastWeatherResult.pressure}</td>
                </tr>
                <tr>
                  <td>House data at </td>
                  <td>{predictionData.lastHomedataResult.datetime}</td>
                </tr>
                <tr>
                  <td>Temp:</td>
                  <td>{predictionData.lastHomedataResult.temp}</td>
                </tr>
                <tr>
                  <td>Pressure:</td>
                  <td> {predictionData.lastHomedataResult.pressure}</td>
                </tr>
                <tr>
                  <td>Final Loss of the Model is: </td>
                  <td>{finalLoss}</td>
                </tr>
              </tbody>
            </table>
          </Grid>

          <Grid item className={classes.setMargin}>
            <div>
              [{lastPredictionTime}] Result is:
              <b>{this.createResult(predictionResult)}</b>
            </div>
          </Grid>
        </Grid>

        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            display: !isModelTrained ? "block" : "none",
            top: 0,
            left: 0,
            zIndex: 1000,
            background: "rgba(255,255,255,0.8)"
          }}
        >
          <p
            style={{
              position: "fixed",
              display: !this.props.isModelTrained ? "block" : "none",
              top: "50%",
              left: "50%",
              zIndex: 1000
            }}
          >
            System is learning now :) <br /> Please give it a moment or two.
          </p>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(MachineLearningResult);
