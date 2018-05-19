import React, { Component } from 'react';
import './Note.css';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';

class Note extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pressed: false
    }
  }

  componentDidMount = () => {
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
    document.removeEventListener("keyup", this.onKeyUp);
  }

  onKeyDown = (event) => {
    if (event.key === this.props.character && this.state.pressed === false) {
      this.props.playSound(this.props.tone);
      this.setState({ pressed: true });
    }
  };

  onKeyUp = (event) => {
    if (event.key === this.props.character) {
      this.setState({ pressed: false });
    }
  };

  notePlayed = () => {
    this.props.playSound(this.props.tone);
  }

  render() {
    const noteClass = classNames({[this.props.className]: true, 'Active': this.state.pressed });
    return (
      <div className={noteClass} onClick={this.notePlayed}>
        <MediaQuery query="(min-width: 1224px)">
          <p>{this.props.character}</p>
        </MediaQuery>
      </div>
    );
  }
}

export default Note;
