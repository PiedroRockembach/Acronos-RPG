import React from "react";
class Login extends React.Component {
  constructor() {
    super();
    this.sender = this.sender.bind(this);
  }
  sender = async (evt) => {
    evt.preventDefault();
    console.log(evt.target);
    await fetch(evt.target.action, {
      method: 'POST',
      body: new FormData(evt.target)
    }).then((toPost) => toPost.json())
    
  }
  render() {
    const {action} = this.props;
    
    
    return (
      <form action='https://sheetdb.io/api/v1/gai9m9j5zi8qb' method="POST" id="sheetdb-form" onSubmit={this.sender}>
        <input type="text" id="user-input" placeholder="Nome" name="data[name]"/>
        <input type="text" name="data[text]" id="user-password" placeholder="Me diga algo." />
        {console.log(this)}
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Login;