import React, { Component } from 'react'
import '../css/Form.css';


class FormLogin extends Component {
  sendInfo = async () => {
    const curent = await this.getInfo();
    let counter = 0;
    curent.forEach((user, index) => {
      if (user.nome === 'pro') counter = index + 2;
    })
    console.log(counter);
    await fetch('http://localhost:5050/api/addUser', {
      method: "POST",
      body: JSON.stringify({ nome: 'liciara', login: 123, senha: 123, id: counter}),
      headers: {
        "content-Type": 'application/json' 
      }
    })
  }

  // sendInfo = async () => {
  //   await fetch('http://localhost:5050/api/addUser', {
  //     method: "POST",
  //     body: JSON.stringify({ nome: 'pro', login: '123', senha: '123'}),
  //     headers: {
  //       "content-Type": 'application/json' 
  //     }
  //   })
  // }
  getInfo = async () => {
    const obj = await fetch('http://localhost:5050/api/users', {
      method: "Get",
      headers: {
        "content-Type": 'application/json' 
      }
    })
    const json = await obj.json();
    console.log(json);
    return json;
  }
  
  render() {
    const { history } = this.props;
    return (
      <div className='form'>
        <h1>Prove ser digno de ser um Ácrono</h1>
        <form action="">
        <label htmlFor="Usuario"> Usuario:
          <input type="text" id='Usuario' />
        </label>
        <label htmlFor="senha"> Senha:
          <input type="password" id='senha' />
          </label>
          <button type="submit">Entrar</button>
        </form>
        <div className='ask'>
          <h2>Ainda não tem uma conta? </h2>
          <button onClick={ () => history.push('/register')}>
            Registrar
          </button>
        </div>
      </div>
    )
  }
}

export default FormLogin