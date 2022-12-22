import React, { Component } from 'react'
// import propTypes from 'prop-types'
import '../css/table.css'

class Table extends Component {
  render() {
    const {
      players,
      title,
      mestre,
      description,
    } = this.props;
    return (
      <div className='table-list'>
        <h1>{ title }</h1>
        <p>{ description }</p>
        <h2>Mestre:</h2>
        <p>{ mestre }</p>
        <h2>Jogadores:</h2>
        <ul className='players-list'>
          {players.map((player) => (
            <li key={player} className="players-item">
              {player}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Table