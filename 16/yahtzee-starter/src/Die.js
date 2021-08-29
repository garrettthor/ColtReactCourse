import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.handleClick(this.props.idx)
    }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        // add an inline arrow function, and then pass this.props.idx as the argument to be passed up, eventually to toggleLocked in Game.js
        // we're going to move the function up to under the Component in order to avoid the inline arrow func
        // onClick={() => this.props.handleClick(this.props.idx)}
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;