import React, { Component } from 'react';
import WebAudioFontPlayer from 'webaudiofont';
import './Synth.css';

import Octave from './Octave';

class Synth extends Component {

  audioContext;
  player = new WebAudioFontPlayer();

  characterMaps = [
    ['z', 'x', 'c', 'v', 'a', 's', 'd', 'f', 'q', 'w', 'e', 'r'],
    ['n', 'm', ',', '.', 'h', 'j', 'k', 'l', 'y', 'u', 'i', 'o']
  ];

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
    console.log('Playing ' + tone);
  }

  render() {
    return (
      this.state.instr
      ?
      <div>
        <div className="Synth">
          <Octave playSound={this.playSound} characterMap={this.characterMaps[0]} pitch={5}></Octave>
          <Octave playSound={this.playSound} characterMap={this.characterMaps[1]} pitch={6}></Octave>
        </div>
      </div>
      :
      <p>Loading...</p>
    );
  }
}

export default Synth;
