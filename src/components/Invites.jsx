import React, { Component } from 'react'
import { getTables, acceptTable } from '../data/datatables'
import '../css/invites.css'

class Invites extends Component {
  accept = async () => {
    const tables = await getTables();
    const user = JSON.parse(localStorage.getItem('userLogin')).login;
    let id;
    const cur = tables.filter((table, index) => {
      const verify = table.nome === this.props.nome;
      if (verify) id = index + 2
      return verify;
    });
    const newTable = cur[0];
    newTable.jogadores = [...JSON.parse(newTable.jogadores), user]
    const {nome, mestre, jogadores, descricao } = newTable;
    console.log(nome, mestre, jogadores, descricao, id);
    acceptTable(nome, mestre, jogadores, descricao, id);
  };

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
        <button 
          onClick={ this.accept }
        >
          Aceitar
        </button>
      </div>
    )
  }
}

export default Invites