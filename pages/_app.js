import React from 'react';
import Login from './src/components/Login';
import AsideMenu from './src/components/asideMenu';
import Header from './src/components/Header';
import './src/css/style.css'
import './src/css/secundary-style.css'

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div className='body'>
          <main>
            <Login />
          </main>
        </div>
      </div>
    )
  }
}

export default App;