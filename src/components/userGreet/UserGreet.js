import React from "react";

class UserGreet extends React.Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>EcoHouse - automation system</h1>
        <h2> {this.state.time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default UserGreet;
