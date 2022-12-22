import React, { Component } from 'react'
import '../css/playerCard.css'

class PlayerCard extends Component {
  render() {
    const {
      nome,
    } = this.props;
    return (
      <div className='player-card'>
        <h1>{ nome }</h1>
      </div>
    )
  }
}

export default PlayerCard