import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import '../css/Form.css';


class FormLogin extends Component {
  state = {
    user: '',
    password: '',
    error: false,
  };
  // sendInfo = async () => {
  //   const curent = await this.getInfo();
  //   let counter = 0;
  //   curent.forEach((user, index) => {
  //     if (user.nome === 'pro') counter = index + 2;
  //   })
  //   console.log(counter);
  //   await fetch('https://acronos-api.vercel.app/api/users', {
  //     method: "POST",
  //     body: JSON.stringify({ nome: 'liciara', login: 123, senha: 123, id: counter}),
  //     headers: {
  //       "content-Type": 'application/json' 
  //     }
  //   })
  // }
  inputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  // sendInfo = async () => {
  //   await fetch('http://localhost:5050/api/addUser', {
  //     method: "POST",
  //     body: JSON.stringify({ nome: 'pro', login: '123', senha: '123'}),
  //     headers: {
  //       "content-Type": 'application/json' 
  //     }
  //   })
  // }
  verifyLogin = async (e) => {
    e.preventDefault();
    const { user, password } = this.state;
    const { history } = this.props;
    const users = await this.getInfo();
    const verify = users.filter((u) => u.login === user && u.senha === password);
    if (verify.length === 0) {
      this.setState({ error: true })
    } else {
      this.setState({ error: false }, () => history.push(`/home/${verify[0].login}`));
    };
    
  };
  getInfo = async () => {
    
    const obj = await fetch('https://acronos-api.vercel.app/api/users', {
      method: "Get",
      headers: {
        "content-Type": 'application/json' 
      }
    })
    const json = await obj.json();
    return json;
  }
  
  render() {
    const { history } = this.props;
    const { error } = this.state;
    return (
      <div className='form' onSubmit={ this.verifyLogin }>
        <h1>Prove seu valor ao tempo</h1>
        {error && <span>Usuário ou senha inválidos</span>}
        <form action="">
        <label htmlFor="Usuario"> Usuario:
          <input type="text" id='Usuario' name='user' onChange={ this.inputChange } />
        </label>
        <label htmlFor="senha"> Senha:
          <input type="password" id='senha' name='password' onChange={ this.inputChange } />
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