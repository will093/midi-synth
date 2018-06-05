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

  onNotePressed = () => {
    this.props.playSound(this.props.tone);
    this.setState({ pressed: true });
    setTimeout(() => {
      this.setState({ pressed: false });
    }, 100)
  }

  render() {
    const noteClass = classNames({[this.props.className]: true, 'Active': this.state.pressed });
    return (
      <div className={noteClass} onClick={this.onNotePressed}>
        <p>{this.props.character}</p>
      </div>
    );
  }
}

export default Note;
