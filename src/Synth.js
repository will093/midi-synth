import React, { Component } from 'react';
import WebAudioFontPlayer from 'webaudiofont';
import './Synth.css';

import Octave from './Octave';
import InstrumentPicker from './InstrumentPicker';

class Synth extends Component {

  audioContext;
  player;
  instruments;

  characterMaps = [
    ['z', 'x', 'c', 'v', 'a', 's', 'd', 'f', 'q', 'w', 'e', 'r'],
    ['n', 'm', ',', '.', 'h', 'j', 'k', 'l', ';', 'u', 'i', 'o']
  ];

  constructor(props) {
    super(props);
    const AudioContextFunc = window.AudioContext || window.webkitAudioContext;

    this.audioContext = new AudioContextFunc();
    this.player = new WebAudioFontPlayer();
    this.instruments = this.player.loader.instrumentKeys().map((key, i) => this.player.loader.instrumentInfo(i));

    this.state = {
      instr: undefined,
    };
  }

  componentDidMount() {
    this.changeInstrument(this.instruments[0].url, this.instruments[0].variable);
  }

  changeInstrument = (path, name) => {
    this.player.loader.startLoad(this.audioContext, path, name);
    this.player.loader.waitLoad(() => {
      const newState = {
        instr: window[name]
      };
      this.setState(newState);
    });
  }

  playSound = (tone) => {
    this.player.queueWaveTable(this.audioContext, this.audioContext.destination, this.state.instr, 0, tone, 1, 0.1, 4);
  }

  instrumentChanged = (instrument) => {
    this.changeInstrument(instrument.url, instrument.variable);
  }

  render() {
    return (
      this.state.instr
      ?
      <div className="Synth-container">
        <div>
          <InstrumentPicker instruments={this.instruments} instrumentSelected={this.instrumentChanged}></InstrumentPicker>
        </div>
        <div className="Synth">
          <Octave playSound={this.playSound} characterMap={this.characterMaps[0]} pitch={5}></Octave>
          <Octave playSound={this.playSound} characterMap={this.characterMaps[1]} pitch={6}></Octave>
        </div>
      </div>
      :
      <div className="Synth-container">
        <p>Loading...</p>
      </div>
    );
  }
}

export default Synth;
