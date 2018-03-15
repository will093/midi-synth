import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Midi Synthesizer</h1>
        </header>
        <div className="Synth">
          <div className="Octave">
            <div className="White-key"></div>
            <div className="Black-key C-sharp"></div>
            <div className="White-key"></div>
            <div className="Black-key D-sharp"></div>
            <div className="White-key"></div>
            <div className="White-key"></div>
            <div className="Black-key F-sharp"></div>
            <div className="White-key"></div>
            <div className="Black-key G-sharp"></div>
            <div className="White-key"></div>
            <div className="Black-key A-sharp"></div>
            <div className="White-key"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
