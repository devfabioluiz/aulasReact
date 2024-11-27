import React, { Component } from 'react';

class ContadorClasse extends Component {
  constructor() {
    super();
    this.state = {
      contador: 0,
    };
  }

  incrementar = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default ContadorClasse;
