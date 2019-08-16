import * as tf from "@tensorflow/tfjs";
import { Button, Grid } from "@material-ui/core";
import React from "react";
import axios from "axios";
import { lastWeatherEntry, lastHouseDataEntry } from "../env";
import { trainingInput, trainingYs } from "./trainingData";

const LEARNING_RATE = 0.1;
const LEARNING_ITERATIONS = 100;
const model = tf.sequential();
const configHiddenLayer = {
  units: 4,
  inputShape: [3],
  activation: "sigmoid"
};
const configOutputLayer = {
  units: 1,
  activation: "sigmoid"
};
const sgdOptimizer = tf.train.sgd(LEARNING_RATE);
// const lossFunction
const compileConifg = {
  optimizer: sgdOptimizer,
  loss: "meanSquaredError"
};
const fitConfig = {
  verbose: true,
  epochs: 5
};

//temp_house, temp_desired, temp_outside,
const xs_inputs = tf.tensor2d(trainingInput);
const training_ys_inputs = tf.tensor2d(trainingYs);

class MLStuff extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      isModelTrained: false,
      result: null,
      currentTemp: 0,
      desiredTemp: 23,
      outsiteTemp: 0,
      finalLoss: 0,
      lastPredictionTime: null,
      lastWeatherResult: {},
      lastHomedataResult: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  startML = () => {
    let input = [
      parseInt(this.state.lastHomedataResult.temp),
      parseInt(this.state.desiredTemp),
      parseInt(this.state.lastWeatherResult.temp)
    ];
    const xs_inputs_prod = tf.tensor2d([input]);

    let output = model.predict(xs_inputs_prod);
    output.data().then(res => {
      console.log("res", res);
      this.setState({
        result: Math.round(res),
        lastPredictionTime: new Date().toLocaleString()
      });
    });
  };

  startMLOnRealData = () => {
    // lastWeatherEntry, lastHouseDataEntry

    function getLastWeather() {
      return axios.get(lastWeatherEntry, { crossdomain: true });
    }
    function getLastHouseData() {
      return axios.get(lastHouseDataEntry, { crossdomain: true });
    }

    axios
      .all([getLastWeather(), getLastHouseData()])
      .then(
        axios.spread((weather, housedata) => {
          this.setState({
            lastWeatherResult: {
              datetime: weather.data[0][0].datetime.value,
              temp: weather.data[0][0].temp,
              humidity: weather.data[0][0].humidity,
              pressure: weather.data[0][0].pressure
            },
            lastHomedataResult: {
              datetime: housedata.data[0][0].datetime.value,
              temp: housedata.data[0][0].temp_house,
              pressure: housedata.data[0][0].pressure_house
            }
          });
        })
      )
      .then(() => {
        this.startML();
      });
  };

  trainModel = async function() {
    for (let i = 0; i < LEARNING_ITERATIONS; i++) {
      const response = await model.fit(
        xs_inputs,
        training_ys_inputs,
        fitConfig
      );
      if (i === LEARNING_ITERATIONS - 1)
        this.setState({
          finalLoss: response.history.loss[0]
        });
    }
  };

  componentWillMount() {
    const hidden = tf.layers.dense(configHiddenLayer);
    const output = tf.layers.dense(configOutputLayer);
    model.add(hidden);
    model.add(output);

    model.compile(compileConifg);

    this.trainModel().then(() => {
      console.log("training completed");

      this.setState({
        isModelTrained: true
      });
    });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.startMLOnRealData(), 60000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  //   console.log("prediction", ys_outputs)
  createResult(result) {
    if (result === 1) return "OPEN WINDOWS TO HEAT HOUSE";
    else if (result === 0) return "CLOSE WINDOWS TO REDUCE COLLING OF HOUSE";
    else return "-";
  }

  render() {
    const {
      result,
      finalLoss,
      lastWeatherResult,
      lastHomedataResult,
      lastPredictionTime
    } = this.state;

    return (
      <div>
        <Grid container direction="column">
          <Grid item xs={6}>
            <h4>Machine Learning Component</h4>
          </Grid>
          <Grid item xs={6}>
            <table>
              <tbody>
                <th>Weather forecast at {lastWeatherResult.datetime} </th>
                <tr>Temp: {lastWeatherResult.temp}</tr>
                <tr>Humidity: {lastWeatherResult.humidity}</tr>
                <tr>Pressure: {lastWeatherResult.pressure}</tr>
                <th>House data at {lastHomedataResult.datetime} </th>
                <tr>Temp: {lastHomedataResult.temp}</tr>
                <tr>Pressure: {lastHomedataResult.pressure}</tr>
                <tr>Final Loss of the Model is: {finalLoss}</tr>
              </tbody>
            </table>

            {/* <Button
              variant="contained"
              onClick={this.startMLOnRealData}
              disabled={!this.state.isModelTrained}
            >
              Do ML!
            </Button> */}
          </Grid>

          <Grid item xs={6}>
            <div>
              [{lastPredictionTime}] Result is: {this.createResult(result)}
            </div>
          </Grid>
        </Grid>

        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            display: !this.state.isModelTrained ? "block" : "none",
            top: 0,
            left: 0,
            zIndex: 1000,
            background: "rgba(255,255,255,0.8)"
          }}
        >
          <p
            style={{
              position: "fixed",
              // top: "50%",
              // height: "100%",
              // color: "white",
              display: !this.state.isModelTrained ? "block" : "none",
              top: "50%",
              left: "50%",
              zIndex: 1000
            }}
          >
            {" "}
            System is learning now :) <br /> Please give it a moment or two.
          </p>
        </div>
      </div>
    );
  }

  // return <div></div>
}

export default MLStuff;
