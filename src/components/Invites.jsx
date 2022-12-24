import React, { Component } from 'react';
import { getTables, acceptTable } from '../data/datatables';
import getInfo from '../data/getInfo';
import { sendUser } from '../data/sendUser';

import '../css/invites.css'

class Invites extends Component {
  accept = async () => {
    const { nome, refresh} = this.props;
    const tables = await getTables();
    const user = JSON.parse(localStorage.getItem('userLogin')).login;
    let id;
    const cur = tables.filter((table, index) => {
      const verify = table.nome === nome;
      if (verify) id = index + 2
      return verify;
    });
    const newTable = cur[0];
    newTable.jogadores = [...JSON.parse(newTable.jogadores), user]
    const {name, mestre, jogadores, descricao } = newTable;
    acceptTable(name, mestre, jogadores, descricao, id);
    const users = await getInfo();
    let idUser;
    const me = users.filter((u, i) => {
      const test = u.login === user;
      if (test) idUser = i + 2;
      return test;
    })[0];
    me.email = JSON.parse(me.email).filter((e) => e.table !== nome);
    me.email = JSON.stringify(me.email);
    console.log(me.nome,me.login, me.senha ,idUser, me.email);
    await sendUser(me.nome,me.login, me.senha ,idUser, me.email);
    refresh();
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
          className='btn-invite'
          onClick={ this.accept }
        >
          Aceitar
        </button>
      </div>
    )
  }
}

export default Invites