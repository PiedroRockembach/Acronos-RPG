import React, { Component } from 'react'

class Home extends Component {
  render() {
    const { login } = this.props.match.params;
    return (
      <div>
      <h1>{login}</h1>

      </div>
    )
  }
}

export default Home