import React, { Component } from 'react'
import { getTables } from '../data/datatables';
import PlayerCard from '../components/PlayerCard';
import getInfo from '../data/getInfo';
import { sendInvite } from '../data/invite';

class Party extends Component {
  state = {
    roomInfo: [],
    loading: true,
    player: [],
    users: [],
    search: [],
    searchInput: '',
  };

  componentDidMount() {
    const prop = this.props;
    const { tableName } = prop.match.params;
    getTables().then((tables) => {
      const thisInfo = tables.filter((table) => table.nome === tableName );
      this.setState({ roomInfo: thisInfo[0], loading: false })
    })
    getInfo().then((info) => this.setState({ users: info }))
  };

  changeList = () => {
    const { searchInput, users } = this.state;
    const input = searchInput.toLowerCase();
    const list = users.filter((user) => user['nome'].toLowerCase().includes(input));
    this.setState({search: list})
  }

  hendlerInput = ({ target }) => {
    this.setState({searchInput: target.value}, this.changeList)
  };

  sendInvite = ({target}) => {
    const { roomInfo } = this.state;
    const myUser = JSON.parse(localStorage.getItem('userLogin'))
    sendInvite(roomInfo.nome, roomInfo.descricao, myUser.name, target.innerText)
    this.setState({ search: [] })
  }

  render() {
    const prop = this.props;
    const { tableName } = prop.match.params;
    const { roomInfo, loading, search } = this.state;
    return (
      <div>
        {loading ? <h1>Carregando...</h1> : (
          <div>
            <h1>{ tableName }</h1>
            <h2>{ roomInfo.descricao }</h2>
            <section className='players-section'>
              {JSON.parse(roomInfo.jogadores).map((player) => (
                <PlayerCard 
                key={player}
                nome={player}
                />
              ))}
            </section>
            <section>
              <h2>convidar jogadores</h2>
                <input type="text" onChange={this.hendlerInput}/>
                {search.map((nome) => (
                  <h2 
                    key={nome.nome}
                    onClick={ this.sendInvite }
                  >
                    {nome.nome}
                  </h2>
                ))}
            </section>
          </div>
        )}
      </div>
    )
  }
}

export default Party