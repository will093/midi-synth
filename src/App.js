import React, { Component } from 'react';
import './App.css';
import Synth from './Synth.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Midi Synthesizer</h1>
        </header>
        <div className="content">
          <Synth></Synth>
        </div>
      </div>
    );
  }
}

export default App;
