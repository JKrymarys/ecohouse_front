import * as tf from "@tensorflow/tfjs";
import axios from "axios";
import { lastWeatherEntry, lastHouseDataEntry } from "../env";
import { trainingInput, trainingYs } from "../logic/trainingData";

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

async function trainModel() {
  let finalTrainingRate;

  for (let i = 0; i < LEARNING_ITERATIONS; i++) {
    const response = await model.fit(xs_inputs, training_ys_inputs, fitConfig);
    if (i === LEARNING_ITERATIONS - 1)
      finalTrainingRate = response.history.loss[0];
  }

  return finalTrainingRate;
}

const predictModel = data => {
  let input = [
    parseInt(data.lastHomedataResult.temp),
    parseInt(23),
    parseInt(data.lastWeatherResult.temp)
  ];
  const xs_inputs_prod = tf.tensor2d([input]);
  let output = model.predict(xs_inputs_prod);

  return output.data().then(res => {
    return {
      predictionData: data,
      result: res,
      lastPredictionTime: new Date().toLocaleString()
    };
  });
};

//temp_house, temp_desired, temp_outside,
const xs_inputs = tf.tensor2d(trainingInput);
const training_ys_inputs = tf.tensor2d(trainingYs);

const hidden = tf.layers.dense(configHiddenLayer);
const output = tf.layers.dense(configOutputLayer);
model.add(hidden);
model.add(output);

model.compile(compileConifg);

export const startMLOnRealData = async () => {
  function getLastWeather() {
    return axios.get(lastWeatherEntry);
  }
  function getLastHouseData() {
    return axios.get(lastHouseDataEntry);
  }

  return axios
    .all([getLastWeather(), getLastHouseData()])
    .then(
      axios.spread((weather, housedata) => {
        return {
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
        };
      })
    )
    .then(data => predictModel(data));
};

export async function startTrainingModel() {
  return trainModel().then(finalLoss => {
    return {
      isTrainingComplete: true,
      finalLoss: finalLoss
    };
  });
}
