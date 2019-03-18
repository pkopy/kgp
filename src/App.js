import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './header/Header.css'
import Header from './header/Header'
import main from './img/tlo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="main-container">
          <hr/>
          
        </div>
      </div>
    );
  }
}

export default App;
