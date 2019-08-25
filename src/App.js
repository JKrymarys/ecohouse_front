import React from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    padding: 24,
    height: "100%"
  }
});

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Homepage> </Homepage>
      </div>
    );
  }
}

export default withStyles(styles)(App);
