import React, { Component } from 'react';

class StateClicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({ num: rand });
    }

    render() {
        return(
            <div>
                <h1>Your number: {this.state.num === 7 ? 'WINNER!' : `${this.state.num}`}</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}

export default StateClicker;