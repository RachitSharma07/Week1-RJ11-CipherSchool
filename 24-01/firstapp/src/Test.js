import React, { Component } from 'react'
import './test.css'

// const Test = () => {
//   return (
//     <div>
//         <h1>Hello, I am Rachit</h1>
//     </div>
//   )
// }

class Test extends Component {
  state = { isLoggedIn: false };

  render() {
    return (
      <div>
        {!this.state.isLoggedIn ? (
          <h1>You are not Logged In!</h1>
        ) : (<h1>Crongratulations, you are logged in!</h1>)}
        <button onClick={(e) => this.setState({ isLoggedIn: true })}>Login!</button>
      </div>
    )
  }
}

export default Test;