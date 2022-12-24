import React, { Component } from 'react';

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
    getUsers: [],
  }
  asyncGetUsers = async () =>  {
    const users = await this.getInfo();
    return users;
  };
  componentDidMount() {
    this.asyncGetUsers().then((users) => this.setState({ getUsers: users }))
  }

  sendRegister = async (e) => {
    e.preventDefault();
    const {
      registerName,
      registerLogin,
      registerPassword,
      getUsers
    } = this.state;
    
    const number = getUsers.length + 2;
    await fetch('https://acronos-api.vercel.app/api/addUser', {
      method: "POST",
      body: JSON.stringify({
        nome: registerName,
        login: registerLogin,
        senha: registerPassword,
        id: number,
        email: '[]',
      }),
      headers: {
        "content-Type": 'application/json' 
      }
    }).then((data) => data.json())
    .then((json) => console.log(json)).then(() => this.goLogin());
  };

  goLogin = () => {
    const { history } = this.props;
    history.push('/login');
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
      getUsers,
    } = this.state;
    const validLogin = getUsers.filter((user) => (user.login === registerLogin));
    
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
        <h2 className='warning'>
          <i>ATENÇÃO!</i> <br/> Este é um projeto pessoal AMADOR, não possui um sistem a de armazenamento de dados seguro.<br /> <i>NÃO</i> insira senhas reais ou dados sensíveis enquanto estiver usando esse site.
        </h2>
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