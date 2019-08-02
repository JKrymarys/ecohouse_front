import React from "react";
import CurentDataForecast from "./currentDataForecast/curentDataForecast";
import Grid from "@material-ui/core/Grid";
import Clock from "./clock";
import MLStuff from "../Logic/mlStuff";


class Homepage extends React.Component {

  render() {
    return (
      <Grid container justify="flex-end">
        <Grid item xs={2}  >
          <Clock/>
          <CurentDataForecast />
        </Grid>
        <Grid item xs={1}>
          {/* <MLStuff /> */}
        </Grid>
      </Grid>
    );
  }
}

export default Homepage;
