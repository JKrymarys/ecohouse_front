import { Grid, Paper, withStyles } from "@material-ui/core";
import React from "react";
import { startMLonGivenData } from "../../logic/machineLearningLogic";

const styles = theme => ({
  infoPaper: {
    width: "100%"
  },
  setMargin: {
    margin: 20
  }
});

class MachineLearningManual extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      homeTempValue: 0,
      weatherTempValue: 0,
      predictionData: {
        lastWeatherResult: {
          temp: null
        },
        lastHomedataResult: {
          temp: null
        }
      },
      predictionResult: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createResult(res) {
    if (res === null) return "-";

    const result = Math.round(res);
    if (result === 1) return `OPEN WINDOWS [${res}]`;
    else if (result === 0) return `CLOSE WINDOWS [${res}]`;
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { homeTempValue, weatherTempValue } = this.state;

    startMLonGivenData(homeTempValue, weatherTempValue).then(data => {
      console.log("sdaadada", data);
      this.setState({
        predictionData: data.predictionData,
        predictionResult: data.result
      });
    });

    event.preventDefault();
  }

  render() {
    const { classes } = this.props;

    const { predictionData, predictionResult } = this.state;

    return (
      <Paper className={classes.infoPaper}>
        <Grid container direction="column">
          <Grid item className={classes.setMargin}>
            <h5>manual Machine Learning Component</h5>
            <form onSubmit={this.handleSubmit}>
              <label>
                HomeTemp:
                <input
                  type="number"
                  name="homeTempValue"
                  value={this.state.homeTempValue}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Weather Temp:
                <input
                  type="number"
                  name="weatherTempValue"
                  value={this.state.weatherTempValue}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </Grid>
          <Grid item className={classes.setMargin}>
            <table>
              <tbody>
                <tr>
                  <td>Weather Temp:</td>
                  <td>{predictionData.lastWeatherResult.temp}</td>
                </tr>
                <tr>
                  <td> House Temp:</td>
                  <td>{predictionData.lastHomedataResult.temp}</td>
                </tr>
              </tbody>
            </table>
          </Grid>
          <Grid item className={classes.setMargin}>
            <div>
              Result is:
              <b>{this.createResult(predictionResult)}</b>
            </div>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(MachineLearningManual);
