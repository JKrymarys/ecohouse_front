import * as tf from "@tensorflow/tfjs";
import axios from "axios";
import { lastWeatherEntry, lastHouseDataEntry } from "../env";
import { trainingInput, trainingYs } from "../logic/trainingData";

const LEARNING_RATE = 0.01;
const LEARNING_ITERATIONS = 100;
const model = tf.sequential();
const configHiddenLayer = {
  units: 8,
  inputShape: [3],
  activation: "sigmoid"
};
const configOutputLayer = {
  units: 1,
  activation: "sigmoid"
};
const optimizer = tf.train.adam(LEARNING_RATE);
const compileConifg = {
  metrics: ["accuracy"],
  optimizer: optimizer,
  loss: "meanSquaredError"
};

function onBatchEnd(batch, logs) {
  console.log("Accuracy", logs.acc);
}

const fitConfig = {
  verbose: true,
  epochs: 5,
  batchSize: 32,
  callbacks: { onBatchEnd }
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
  const homeTemp = data.lastHomedataResult.temp;
  const weatherTemp = data.lastWeatherResult.temp;

  let input = [parseInt(homeTemp), parseInt(23), parseInt(weatherTemp)];
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

export const startMLonGivenData = async (inputHouseData, inputWeatherData) => {
  const data = {
    lastHomedataResult: {
      temp: inputHouseData
    },
    lastWeatherResult: {
      temp: inputWeatherData
    }
  };

  return predictModel(data);
};

export async function startTrainingModel() {
  return trainModel().then(finalLoss => {
    return {
      isTrainingComplete: true,
      finalLoss: finalLoss
    };
  });
}
