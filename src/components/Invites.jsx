import React, { Component } from 'react'
import '../css/invites.css'
class Invites extends Component {
  render() {
    const {
      nome,
      descricao,
      remetente,

    } = this.props
    return (
      <div className='card-invite'>
        <h1>{`Convite de ${remetente} para jogar na mesa:`}</h1>
        <h2>{`${nome}`}</h2>
        <p>{`${descricao}`}</p>
      </div>
    )
  }
}

export default Invites