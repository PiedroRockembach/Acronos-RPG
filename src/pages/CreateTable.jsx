import React, { Component } from 'react'
import { postTable, getTables } from '../data/datatables';


class CreateTable extends Component {
  state = {
    name: '',
    description: '',
    usuarios: [],
    valid: true,
  };

  inputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  sendtable = async (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    const { history } = this.props;
    const tables = await getTables();
    const validation = tables.some((table) => table.nome === name);
    this.setState({valid: !validation})
    if (!validation) {
      const id = tables.length + 2;
      const user = JSON.parse(localStorage.getItem('userLogin')).login;
      console.log(name, description, user);
      await postTable(name, user, description, id)
      history.push(`/home/${user}`);
    }

  }

  render() {
    const { valid } = this.state;
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
         {!valid && <span>Nome já utilizado, por favor escolher outro.</span>}
          <button type="submit">Entrar</button>
        </form>
      </div>
    )
  }
}

export default CreateTable