import React from "react";
import CurentDataForecast from "./currentDataForecast/CurentDataForecast";
import UserGreet from "./userGreet/UserGreet";
import MachineLearningComponent from "./MachineLearningResult/MachineLearningResult";
import { withStyles, Grid } from "@material-ui/core";
import HistoricalDataChart from "./historicalDataChart/HistoricalDataChart";

import {
  startMLOnRealData,
  startTrainingModel
} from "../logic/machineLearningLogic";

const styles = theme => ({
  container: {
    // marginTop: 50,
  }
});

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelTrained: false,
      predictionResult: {},
      predictionData: {
        lastWeatherResult: {
          datetime: null,
          temp: null,
          humidity: null,
          pressure: null
        },
        lastHomedataResult: {
          datetime: null,
          temp: null,
          pressure: null
        }
      },
      lastPredictionTime: null,
      finalLoss: null
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    startTrainingModel()
      .then(data => {
        console.log(data);
        this.setState({ isModelTrained: true, finalLoss: data.finalLoss });
      })
      .then(
        (this.timerID = setInterval(
          () =>
            startMLOnRealData().then(data =>
              this.setState({
                predictionData: data.predictionData,
                predictionResult: data.result,
                lastPredictionTime: data.lastPredictionTime
              })
            ),
          30000
        ))
      );
  }

  render() {
    const { classes } = this.props;
    const {
      isModelTrained,
      predictionData,
      predictionResult,
      lastPredictionTime,
      finalLoss
    } = this.state;
    return (
      <Grid
        container
        className={classes.container}
        justify="flex-end"
        spacing={5}
      >
        <Grid item xs={7}>
          <HistoricalDataChart />
          <MachineLearningComponent
            isModelTrained={isModelTrained}
            predictionData={predictionData}
            predictionResult={predictionResult}
            lastPredictionTime={lastPredictionTime}
            finalLoss={finalLoss}
          />
        </Grid>
        <Grid item xs={5}>
          <Grid container direction="column" justify="flex-end" spacing={5}>
            <UserGreet />
            <CurentDataForecast />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Homepage);
