import React, { Component } from 'react';
// import getInfo from '../data/getInfo'

class Register extends Component {
  state = {
    error: false,
    errorSenha: false,
    registerName: '',
    registerLogin: '',
    registerPassword: '',
    confirmPassword: '',
    opacity: 0.4,
    enabled: false,
  }

  sendRegister = async (e) => {
    e.preventDefault();
    const {
      registerName,
      registerLogin,
      registerPassword,
    } = this.state;
    const users = await this.getInfo();
    const number = users.length + 2;
    console.log(number);
    await fetch('https://acronos-api.vercel.app/api/addUser', {
      method: "POST",
      body: JSON.stringify({ nome: registerName, login: registerLogin, senha: registerPassword, id: number,}),
      headers: {
        "content-Type": 'application/json' 
      }
    }).then((data) => data.json())
    .then((json) => console.log(json))
  };

  getInfo = async () =>  {
    
    const obj = await fetch('https://acronos-api.vercel.app/api/users', {
      method: "Get",
      headers: {
        "content-Type": 'application/json' 
      }
    })
    const json = await obj.json();
    return json;
  }

  verify2 = async () => {
    const {
      registerName,
      registerLogin,
      registerPassword,
      error,
      errorSenha,
    } = this.state;
    const users = await this.getInfo();
    const validLogin = users.filter((user) => (user.login === registerLogin));
    
    validLogin.length !== 0 
    ? this.setState({ error: true }) : this.setState({ error: false });
    if (
      registerName !== '' 
      && registerLogin !== '' 
      && registerPassword !== '' 
      && !error
      && !errorSenha
      ) {
      this.setState({enabled: true, opacity: 1})
      } else {
      this.setState({enabled: false, opacity: 0.4})
      }
  }

  verifyRegister = async (e) => {
    const {
      registerPassword,
      confirmPassword,
    } = this.state;
    const errorPassword = registerPassword !== confirmPassword ;
    this.setState({errorSenha: errorPassword}, this.verify2);
    
    
  };

  inputChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, this.verifyRegister);
  }
  
  render() {
    const { history } = this.props;
    const { error, errorSenha, enabled, opacity} = this.state;
    return (
      <div className='form'>
        <h1>Livre-se das correntes do tempo</h1>
        <form action="" onSubmit={this.sendRegister}>
          <label htmlFor="nome">Nome:
            <input type="text" id='nome' name='registerName' onChange={this.inputChange}/>
          </label>
          <label htmlFor="Usuario">Login:
          <input type="text" id='Usuario' name='registerLogin' onChange={this.inputChange} />
          </label>
          {errorSenha && <span>A confirmação está diferente da senha</span>}
          <label htmlFor="senha">Senha:
          <input type="password" id='senha' name='registerPassword' onChange={this.inputChange} />
          </label>
          <label htmlFor="confirm">Confirmar Senha:
          <input type="password" id='confirm' name='confirmPassword' onChange={this.inputChange} />
          </label>
          {error && <span>Login já utilizado</span>}
          <button 
            type="submit" 
            disabled={!enabled}
            style={{opacity: opacity}}
            >
            Registrar
          </button>
        </form>
        <div className='ask'>
          <h2>Já possui uma conta? </h2>
          <button onClick={ () => history.push('/login')}>
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

export default Register;