import React from 'react';
import Login from '../src/components/Login';
import AsideMenu from '../src/components/AsideMenu';
import Header from '../src/components/Header';
import Perfil from '../src/components/Perfil';
import '../src/css/secundary-style.css'
import '../src/css/style.css'

class App extends React.Component {

  render() {
    return(
      <div>
        <Header />
        <div className='body'>
        <AsideMenu />
          <main>
            <div className='perfil'>
              <Perfil />
              <Login />
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default App;