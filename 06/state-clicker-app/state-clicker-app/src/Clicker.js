import React, { Component } from 'react'
import './Clicker.css';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1,
            isSeven: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        let randNum = Math.floor(Math.random() * 10) + 1;
        this.setState({ num: randNum });
        if (randNum === 7) {
            this.setState({ isSeven: true });
        } else {
            this.setState({ isSeven: false});
        };
    }

    render() {
        let button
        let winnerMsg
        if(this.state.isSeven === false) {
            button =  <button className="Clicker-button-displayed" onClick={this.handleClick}>Generate Random Number</button>;
            winnerMsg = '';
        } else {
            button = <button className="Clicker-button-hidden">I'm gone, baby.</button>;
            winnerMsg = 'You are a Wiener!';
        };

        return(
            <div className="Clicker">
                <h1>Your Random Number: {this.state.num}</h1>
                {button}
                <h2>{winnerMsg}</h2>
            </div>
        );
    }
}

export default Clicker;