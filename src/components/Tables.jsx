import React, { Component } from 'react';
import getTables from '../data/getTables';
import '../css/perfil.css'

class Tables extends Component {
  state = {
    yourTables: [],


  }
  
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('userLogin'));
   getTables().then((tables) => {
    const myTables = tables.filter((table) => table.mestre === user.login );
    console.log(myTables);
    this.setState({ yourTables: myTables})
   });
  }
  // teste = async () => {
  //   const players = JSON.stringify(['piedroRockembach', 'TEste' ]);
  //   await fetch('http://localhost:5050/api/tables', {
  //     method: "POST",
  //     body: JSON.stringify({ nome: 'Trybe', mestre: 'piedroRockembach', jogadores: players, id: 2,}),
  //     headers: {
  //       "content-Type": 'application/json' 
  //     }
  //   }).then((data) => data.json())
  //   .then((json) => console.log(json));
  // };

  render() {
    const {
      yourTables
    } = this.state;
    return (
      <div className='perfil-page'>
        <h1>MESAS</h1>
        {yourTables.length === 0 ? <h1>Você ainda não entá em uma mesa</h1> : (
          <ul>
          {yourTables.map((table) => (
            <div
              key={ table.nome }
            >
              <h1>{ table.nome }</h1>

            </div>
          ))}
        </ul>
        )}
        <button>Criar mesa</button>
        
      </div>
    );
  }
}

export default Tables;