import React, { Component } from 'react'
import PropTypes from 'prop-types';
import '../css/menu.css'

class Menu extends Component {
  render() {
    const { 
      disconnect,
      menuHandler,
      perfil,
      mesas,
    } = this.props;

    return (
      <div 
      className='aside-menu'
       >
        <div
          className={`menu-option ${ perfil && 'selected'}`}
          id={'perfil'}
          onClick={ menuHandler }

        >
          Perfil
        </div>
        <div 
        className={`menu-option ${ mesas && 'selected'}`}
        id={'mesas'}
        onClick={ menuHandler }
        >
          Mesas
        </div>
        <button onClick={disconnect}>Sair</button>
    </div>
    )
  }
}

Menu.propTypes = {
  disconnect: PropTypes.func,
}.isRequired;

export default Menu