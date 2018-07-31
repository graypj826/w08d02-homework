import React, { Component } from 'react';

import './App.css';
import Login from "./Login";
import MainContainer from "./MainContainer"


class App extends Component {
  constructor(){
    super()
  
    this.state = {
      logged: false,
      username : "",
      
    }
  }
  login = (username) => {
    
    this.setState({
      logged: true,
      username: username, 
    })

  }
  render() {
    return (
      <div className="App">
        <h1> Pokemon ARE RAD! </h1>
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
