import * as tf from "@tensorflow/tfjs";
import React, { useState } from 'react';

function MLStuff() {
  const model = tf.sequential();

  const configHiddenLayer = {
    units: 4,
    inputShape: [2],
    activation: "sigmoid"
  };

  const configOutputLayer = {
    units: 2,
    activation: "sigmoid"
  };

  const hidden = tf.layers.dense(configHiddenLayer);
  const output = tf.layers.dense(configOutputLayer);

  model.add(hidden);
  model.add(output);



  return (<div> Here it will be the result of the ML stuff :) </div>)
}

export default MLStuff();
