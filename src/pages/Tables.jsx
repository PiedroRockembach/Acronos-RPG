import React, { Component } from 'react';
import { getTables} from '../data/datatables';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import '../css/tables.css'

class Tables extends Component {
  state = {
    yourTables: [],


  }
  
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('userLogin'));
   getTables().then((tables) => {
    const myTables = tables.filter((table) => JSON.parse(table.jogadores).includes(user.login));
    this.setState({ yourTables: myTables})
   });
  }

  render() {
    const {
      yourTables
    } = this.state;
    return (
      <div className='tables-page'>
        <h1 className='title'>MESAS</h1>
        {yourTables.length === 0 ? <h1>Você ainda não entá em uma mesa</h1> : (
          <ul className='tables-list'>
          {yourTables.map((table) => (
            <Link to={`/party/${table.nome}`} key={ table.nome }>
              <Table
                title={ table.nome }
                players={ JSON.parse(table.jogadores)}
                mestre={ table.mestre }
                description={ table.descricao }
              />
            </Link>
          ))}
        </ul>
        )}
        
      </div>
    );
  }
}

export default Tables;