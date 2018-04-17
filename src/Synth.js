import React, { Component } from 'react';
import WebAudioFontPlayer from 'webaudiofont';
import './Synth.css';

class Synth extends Component {

  audioContext;
  player = new WebAudioFontPlayer();

  constructor(props) {
    super(props);
    const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContextFunc();
    this.state = {
      instr: undefined,
    };
  }

  componentDidMount() {
    this.changeInstrument('https://surikov.github.io/webaudiofontdata/sound/0010_Aspirin_sf2_file.js', '_tone_0010_Aspirin_sf2_file');
  }

  changeInstrument = (path, name) => {
    let instr;
    const player = new WebAudioFontPlayer();

    this.player.loader.startLoad(this.audioContext, path, name);
    this.player.loader.waitLoad(() => {
      const newState = {
        instr: window[name]
      };
      this.setState(newState);
    });
  }

  playSound = (note) => {
    this.player.queueWaveTable(this.audioContext, this.audioContext.destination, this.state.instr, 0, 12 * 4 + note, 0.75);
  }

  render() {
    return (
      this.state.instr
      ?
      <div>
        <div className="Synth">
          <div className="Octave">
            <div className="White-key" onClick={() => this.playSound(0)}></div>
            <div className="Black-key C-sharp" onClick={() => this.playSound(1)}></div>
            <div className="White-key" onClick={() => this.playSound(2)}></div>
            <div className="Black-key D-sharp" onClick={() => this.playSound(3)}></div>
            <div className="White-key" onClick={() => this.playSound(4)}></div>
            <div className="White-key" onClick={() => this.playSound(5)}></div>
            <div className="Black-key F-sharp" onClick={() => this.playSound(6)}></div>
            <div className="White-key" onClick={() => this.playSound(7)}></div>
            <div className="Black-key G-sharp" onClick={() => this.playSound(8)}></div>
            <div className="White-key" onClick={() => this.playSound(9)}></div>
            <div className="Black-key A-sharp" onClick={() => this.playSound(10)}></div>
            <div className="White-key" onClick={() => this.playSound(11)}></div>
          </div>
        </div>
      </div>
      :
      <p>Loading...</p>
    );
  }
}

export default Synth;
