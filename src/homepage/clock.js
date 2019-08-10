import React from "react";

class Clock extends React.Component {
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
        <div>
          <h1>Have a nice day!</h1>
          <h2>It is {this.state.time.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }

  export default Clock;