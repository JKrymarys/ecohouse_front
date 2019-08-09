import * as tf from "@tensorflow/tfjs";
import { TextField, Button } from "@material-ui/core";
import React from "react";

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

const xs_inputs_prod = tf.tensor2d([[22, 23, 29]]);

//temp_house, temp_desired, temp_outside,
const xs_inputs = tf.tensor2d([
  //inputs - ciepło otworzyc okna
  [22, 23, 25],
  [22, 23, 25],
  [21, 23, 28],

  //TO DO MARGINES

  //inputs - ciepło zamknac + zaslonic okna
  [23, 23, 28],
  [23, 23, 28],
  [23, 23, 28],

  // otworz okna
  [19, 23, 25],
  [19, 23, 25],
  [19, 23, 28],

  // zamknij okna

  [25, 23, 19],
  [29, 23, 15],
  [26, 23, 18]
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
  [0]
]);

// async function feedData() {
//   return await model.fit(xs_inputs, training_ys_inputs,fitConfig);
// }

class MLStuff extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      isModelTrained: false,
      result: 0,
      currentTemp: 0,
      desiredTemp: 0,
      outsiteTemp: 0,
      finalLoss: 0
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  startML = () => {
    let input = [
      parseInt(this.state.currentTemp),
      parseInt(this.state.desiredTemp),
      parseInt(this.state.outsiteTemp)
    ];
    const xs_inputs_prod = tf.tensor2d([input]);

    let output = model.predict(xs_inputs_prod);
    output.data().then(res => {
      console.log("res", res);
      this.setState({
        result: Math.round(res)
      });
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

      console.log(response.history.loss[0]);
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

  //TODO: NIECH SIE MODEL NIE RENDERUJE PONOWNIE - uwaga na stan i na metody lifecycle
  // const [result, setResult] = useState(0);

  //   console.log("prediction", ys_outputs)

  render() {
    const {
      model,
      result,
      currentTemp,
      desiredTemp,
      outsiteTemp,
      finalLoss
    } = this.state;

    return (
      <div>
        <form>
          <TextField
            id="currentTemp"
            label="Current Temp"
            value={currentTemp}
            onChange={this.onChange}
            type="number"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="desiredTemp"
            label="Chosen Temp"
            value={desiredTemp}
            onChange={this.onChange}
            type="number"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="filled"
          />
          <TextField
            id="outsiteTemp"
            label="Outsite temp"
            value={outsiteTemp}
            onChange={this.onChange}
            type="number"
            // className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            margin="normal"
            variant="filled"
          />
        </form>

        <Button
          variant="contained"
          onClick={this.startML}
          disabled={!this.state.isModelTrained}
        >
          Do ML!
        </Button>

        <div>Final Loss of the Model is: {finalLoss}</div>
        <div>For the input data: {xs_inputs_prod.toString()}</div>
        <div>Result is: {result}</div>
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
          <p style={{
            position: "fixed",
            // top: "50%",
            // height: "100%",
            // color: "white",
            display: !this.state.isModelTrained ? "block" : "none",
            top: "50%",
            left: "50%",
            zIndex: 1000,
          }} > System is learning now :) <br/> Please give it a moment or two.</p> 
        </div>
      </div>
    );
  }

  // return <div></div>
}

export default MLStuff;
