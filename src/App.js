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
          <img src={main}  alt="montain"/>
          <div className="center">
            <h1>Korona Gór Polski</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
