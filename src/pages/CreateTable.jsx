import React, { Component } from 'react'
import { postTable, getTables } from '../data/datatables';


class CreateTable extends Component {
  state = {
    name: '',
    description: '',
    usuarios: [],
  };

  inputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  sendtable = async (e) => {
    e.preventDefault();
    const { history } = this.props;
    const tables = await getTables();
    const id = tables.length + 2;
    const { name, description } = this.state;
    const user = JSON.parse(localStorage.getItem('userLogin')).login;
    console.log(name, description, user);
    await postTable(name, user, description, id)
    history.push(`/home/${user}`);
  }

  render() {
    return (
      <div className='form' >
        <h1>Crie sua mesa</h1>
        <form action="" onSubmit={ this.sendtable }>
        <label htmlFor="nome"> Nome:
          <input type="text" id='nome' name='name' onChange={ this.inputChange } />
        </label>
        <label htmlFor="description"> descrição:
          <textarea  id='description' name='description' onChange={ this.inputChange } maxLength={50}/>
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    )
  }
}

export default CreateTable