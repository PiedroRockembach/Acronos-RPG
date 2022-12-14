import React from "react";
import FormLogin from "./components/FormLogin"
import Register from "./components/Register";
import Home from "./components/Home";
import { BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import './App.css'

class App extends React.Component {

  state = {
    loged: false,
  }
  render() {
    const {
      loged,
    } = this.state;
    return (
      <BrowserRouter>
        { !loged ? <Redirect to="/login" /> : <Redirect to="/home/:login" />}
        <Switch>
          <Route exact path="/" render={(props) => (<Home {...props} />)} />
          <Route exact path="/home/:login" render={(props) => (<Home {...props} />)} />
          <Route exact path="/login" component={ FormLogin } />
          <Route exact path="/Register" component={ Register } />
        </Switch>
          
      </BrowserRouter>
  
    );
  }
}

export default App;
