import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        // add an inline arrow function, and then pass this.props.idx as the argument to be passed up, eventually to toggleLocked in Game.js
        onClick={() => this.props.handleClick(this.props.idx)}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;