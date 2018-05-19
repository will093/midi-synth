import React, { Component } from 'react';

class InstrumentPicker extends Component {

  instrumentChanged = (event) => {
    this.props.instrumentSelected(this.props.instruments[event.target.value]);
  }

  render() {
    var instrumentOptions = this.props.instruments.map((instr, i) => <option key={instr.url} value={i}>{`${i+1}. ${instr.title}`}</option>);
    return (
      <select className="form-control" onChange={this.instrumentChanged}>
        {instrumentOptions}
      </select>
    );
  }
}

export default InstrumentPicker;
