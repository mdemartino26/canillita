import React, { Component } from 'react';

class Reloj extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div>
        <p>Hora: {this.state.date.toLocaleTimeString()}</p>
        
      </div>
    );
  }
}
export default Reloj;