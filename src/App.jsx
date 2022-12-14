import React from "react";
import FormLogin from "./components/FormLogin"
// import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import './App.css'

class App extends React.Component {

  state = {
    loged: false,
    userLoged: '',
    userName: '',
  }
  componentDidMount () {
    const usuario = JSON.parse(localStorage.getItem('userLogin'));
    console.log(usuario);
    const logado = usuario ? true : false;
    this.setState({ 
      loged:logado,
      userLoged: logado ? usuario.login : '',
      userName: logado ? usuario.name : '',


    });
    
  }

  logedTrue = (userLogin) => this.setState({ loged : true, userLoged: userLogin});
  logedFalse = (userLogin) => this.setState({ loged : false, userLoged: ''});

  render() {
    const {
      loged,
      userLoged,
    } = this.state;
    // console.log(loged, userLoged)
    return (
      <BrowserRouter>
        { !loged ? <Redirect to="/login" /> : <Redirect to={`/home/${userLoged}`}/>}
        <Switch>
          <Route 
            exact path="/" 
            render={(props) => (<Home {...props} />)} 
          />
          <Route 
          exact path="/home/:login" 
          render={(props) => (<Home {...props} exit={ this.logedFalse }/>)} 
          />
          <Route exact path="/login" render={ (props) => <FormLogin {...props} loginStatus={ this.logedTrue} />} />
          {/* <Route exact path="/Register" component={ Register } /> */}
        </Switch>
          
      </BrowserRouter>
  
    );
  }
}

export default App;
