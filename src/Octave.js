import React, { Component } from 'react';
import './Octave.css';
import Note from './Note';

class Octave extends Component {

  render() {
    const octaveClasses = [
      'White-key',
      'Black-key C-sharp',
      'White-key',
      'Black-key D-sharp',
      'White-key',
      'White-key',
      'Black-key F-sharp',
      'White-key',
      'Black-key G-sharp',
      'White-key',
      'Black-key A-sharp',
      'White-key',
    ];

    return (
      <div className="Octave">
        {
          octaveClasses.map((className, i) => <Note key={i} className={className} tone={ (this.props.pitch * 12) + i} character={this.props.characterMap[i]} playSound={this.props.playSound}></Note>)
        }
      </div>
    );
  }
}

export default Octave;
