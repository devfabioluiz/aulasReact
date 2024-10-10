import React, {Component}  from 'react'

class ExibirNomeClasse extends Component {
  constructor() {
      super();
      this.state = {
          name: ''
      };
  }

  mudarNome = () => {
      this.setState({ name: 'João' });
  };

  render() {
      return (
          <div>
              <h1>Nome exibido: {this.state.name}</h1>
              <button onClick={this.mudarNome}>mudarNome</button>
          </div>
      );
  }
}

export default ExibirNomeClasse;