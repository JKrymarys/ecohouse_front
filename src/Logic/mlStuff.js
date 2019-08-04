import * as tf from "@tensorflow/tfjs";
import React, { useState } from "react";

const LEARNING_RATE = 0.2;

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
const xs_inputs = tf.tensor2d([

//inputs - ciepło otworzyc okna
  [22,23,25],
  [22,23,25],
  [21,23,28],

  //TO DO MARGINES 

  //inputs - ciepło zamknac + zaslonic okna
  [23,23,28],
  [23,23,28],
  [23,23,28],

// otworz okna
  [19,23,25],
  [19,23,25],
  [19,23,28],

// zamknij okna

  [25,23,19],
  [29,23,15],
  [26,23,18],
]);

const training_ys_inputs = tf.tensor2d([
[1],
[1],
[1],

[0],
[0],
[0],

[1],
[1],
[1],

[0],
[0],
[0],
]);

// async function feedData() {
//   return await model.fit(xs_inputs, training_ys_inputs,fitConfig);
// }

async function trainModel() {
  for (let i = 0; i < 1000; i++) {
    const response = await model.fit(xs_inputs, training_ys_inputs, fitConfig);
    console.log(response.history.loss[0]);
  }
}

export default function MLStuff() {
  const hidden = tf.layers.dense(configHiddenLayer);
  const output = tf.layers.dense(configOutputLayer);

  model.add(hidden);
  model.add(output);

  model.compile(compileConifg);

  trainModel().then(() => {
    console.log("training completee");
    let output = model.predict(xs_inputs);
    output.print()
    // console.log(output);
  });
  //   console.log("prediction", ys_outputs)

  return <div> gg </div>;
  // return <div></div>
}

// export default MLStuff();
