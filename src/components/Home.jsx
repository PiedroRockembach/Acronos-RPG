import React, { Component } from 'react'
import Perfil from './Perfil';
import Menu from './Menu';
import Tables from './Tables';
import '../css/home.css'

class Home extends Component {
  state = {
    perfil: true,
    mesas: false,
  }

  disconnect = () => {
    const { exit } = this.props;
    localStorage.removeItem('userLogin');
    exit()
  };

  menuHandler = ({ target }) => {
    const selector = {
      'mesas': () => this.setState({ perfil: false, mesas: true }),
      'perfil':() => this.setState({ perfil: true, mesas: false })
    }
    selector[target.id]();
  }

  render() {
    const { login } = this.props.match.params;
    const {
      perfil,
      mesas,
    } = this.state;
    return (
      <div className='home-page'>
      <Menu 
      disconnect={ this.disconnect }
      menuHandler={ this.menuHandler }
      perfil={ perfil }
      mesas={ mesas }
      /> 
      <div className='main-content'>
        { perfil && (
          <Perfil 
            login={login}
          /> 
        )}
        { mesas && (
          <Tables
          /> 
        )}
      </div>
      </div>
    )
  }
}

export default Home