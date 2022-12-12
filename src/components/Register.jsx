import React, { Component } from 'react';
class Register extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className='form'>
        <h1>Torne-se um  Ácrono</h1>
        <form action="">
          <label htmlFor="nome">Nome:
            <input type="text" id='nome'/>
          </label>
          <label htmlFor="Usuario"> Usuario:
          <input type="text" id='Usuario' />
          </label>
          <label htmlFor="senha"> Senha:
          <input type="password" id='senha' />
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