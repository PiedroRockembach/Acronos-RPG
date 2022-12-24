import React, { Component } from 'react'
import getInfo from '../data/getInfo';
import '../css/Form.css';


class FormLogin extends Component {
  state = {
    user: '',
    password: '',
    error: true,
    tryed: false,
  };

  inputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  verifyLogin = async (e) => {
    e.preventDefault();
    const { user, password} = this.state;
    const users = await getInfo();
    const verify = users.filter((u) => u.login === user && u.senha === password);
    if (verify.length === 0) {
      this.setState({ error: true, tryed: true })
    } else {
      this.setState({ error: false, tryed: true }, () => {
        localStorage.setItem('userLogin',JSON.stringify(
          { login: verify[0].login, name:verify[0].nome,}
          ))
        this.props.loginStatus(verify[0].login);
      });
    };
    
  };
  
  render() {
    const { history } = this.props;
    const { error, tryed } = this.state;
    return (
      <div className='form' >
        <h1>Prove que é um Ácrono</h1>
        <form action="" onSubmit={ this.verifyLogin }>
        <label htmlFor="Usuario"> Login:
          <input type="text" id='Usuario' name='user' onChange={ this.inputChange } />
        </label>
        <label htmlFor="senha"> Senha:
          <input type="password" id='senha' name='password' onChange={ this.inputChange } />
          </label>
        {(error && tryed) && <span>Usuário ou senha inválidos</span>}
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