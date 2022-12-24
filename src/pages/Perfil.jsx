import React, { Component } from 'react';
import getInfo from '../data/getInfo'
import Invites from '../components/Invites';
import { items } from '../data/items';
import '../css/perfil.css'


class Perfil extends Component {
  state = {
    user: {},
    loading: false,

  }
  componentDidMount () {
    this.refreshUser();
  };

  refreshUser = () => {
    const local = JSON.parse(localStorage.getItem('userLogin'));
    getInfo().then((info) => {
      const myUser = info.filter((user) => user.login === local.login);
      this.setState({user: myUser[0], loading: false});
    });
  } 
  
  render() {
    const { loading, user } = this.state;
    return (
     <div>
      {loading ? <h1>Carregando</h1> : (
        <div className='perfil-page'>
          <h1>{user.nome === undefined ? 'carregando...' : `${user.nome}`}</h1>
          <img src="http://drive.google.com/uc?export=view&id=1mAaZVcAe_Vn8yD2ctHFFU9chxzsb6rRm" alt="" />
          <section className='email'>
          <h1>convites para mesas:</h1>
          <div className='list-invites'>
            {user.email && JSON.parse(user.email).map((invite, index) => (
              <Invites 
                key={`${invite}-${index}`} 
                nome={invite.table}
                descricao={invite.description}
                remetente={invite.remetente}
                refresh={ this.refreshUser }
              />
            ))}
          </div>
          </section>
        </div>
      )}

     </div>
    );
  }
}

export default Perfil;