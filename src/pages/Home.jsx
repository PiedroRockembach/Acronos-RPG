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
    const { history } = this.props;
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
        <div className='mesas'>
        <Tables/> 
        <button
          className='btn-create-table'
          onClick={() => history.push('/create-table')}
        >
          Criar mesa
        </button>
        </div>
        )}
      </div>
      </div>
    )
  }
}

export default Home