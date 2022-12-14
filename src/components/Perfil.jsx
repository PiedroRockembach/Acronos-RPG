import React, { Component } from 'react';
import '../css/perfil.css'

class Perfil extends Component {
  state = {
    name: ''

  }
  componentDidMount () {
    const local = JSON.parse(localStorage.getItem('userLogin'));
    this.setState({name: local.name})
    console.log(local);
  };
  
  render() {
    return (
      <div>
        <h1>{`Bem Vindo ${this.state.name}`}</h1>
        
      </div>
    );
  }
}

export default Perfil;