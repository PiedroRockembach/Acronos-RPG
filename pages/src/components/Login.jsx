import React from "react";

class Login extends React.Component {
  render() {
    return (
      <section class="perfil">
      <div id="icon-perfil"></div>
      <br/>
      <form action="get">
        <input type="text" id="user-input" placeholder="User" />
        <input type="password" name="" id="user-password" />
        <button type="submit">Enviar</button>
      </form>
    </section>
    );
  }
}

export default Login;