import React from "react";
import CurentDataForecast from "./currentDataForecast/CurentDataForecast";
import UserGreet from "./userGreet/UserGreet";
import MLStuff from "../logic/mlStuff";
import { withStyles, Grid } from "@material-ui/core";
import HistoricalDataChart from "./historicalDataChart/HistoricalDataChart";

const styles = theme => ({
  container: {
    // marginTop: 50,
  }
});

class Homepage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.container}
        justify="flex-end"
        spacing={5}
      >
        <Grid item xs={7}>
          <HistoricalDataChart />
          <MLStuff />
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
