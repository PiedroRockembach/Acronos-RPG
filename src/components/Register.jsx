import React, { Component } from 'react';
class Register extends Component {
  state = {
    error: false,
    registerName: '',
    registerLogin: '',
    registerPassword: '',
  }

  inputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { history } = this.props;
    return (
      <div className='form'>
        <h1>Livre-se das correntes do tempo</h1>
        <form action="">
          <label htmlFor="nome">Nome:
            <input type="text" id='nome' name='registerName' onChange={this.inputChange}/>
          </label>
          <label htmlFor="Usuario"> Login:
          <input type="text" id='Usuario' name='registerLogin' onChange={this.inputChange} />
          </label>
          <label htmlFor="senha"> Senha:
          <input type="password" id='senha' name='registerPassword' onChange={this.inputChange} />
          </label>
          <button type="submit">
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