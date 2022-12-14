import React, { Component } from 'react'
import Perfil from './Perfil';

class Home extends Component {
  disconnect = () => {
    const { exit } = this.props;
    localStorage.removeItem('userLogin');
    exit()
  };
  render() {
    const { login } = this.props.match.params;
    return (
      <div>
      <Perfil 
        login={login}
      /> 

      <button onClick={this.disconnect}>Sair</button>
      </div>
    )
  }
}

export default Home