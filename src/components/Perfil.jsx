import React, { Component } from 'react';
import '../css/perfil.css'

class Perfil extends Component {
  state = {
    name: ''

  }
  componentDidMount () {
    const local = JSON.parse(localStorage.getItem('userLogin'));
    if (local !== null){
      this.setState({name: local.name});
      
    }
  };
  
  render() {
    return (
      <div className='perfil-page'>
        <h1>{`${this.state.name}`}</h1>
        <img src="http://drive.google.com/uc?export=view&id=1mAaZVcAe_Vn8yD2ctHFFU9chxzsb6rRm" alt="" />
      </div>
    );
  }
}

export default Perfil;