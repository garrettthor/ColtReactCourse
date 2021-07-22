import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    static defaultProps = {
        face: 'heads',
        flipping: false
    };

    render() {
        const headsImg = "https://tinyurl.com/react-coin-heads-jpg"
        const tailsImg = "https://tinyurl.com/react-coin-tails-jpg"
        return (
            <div className={`Coin ${this.props.flipping? 'flipping' : ''}`}>
                {this.props.face === 'heads' ? <img src={headsImg} alt="HEADS" /> : <img src={tailsImg} alt="TAILS" />}
            </div>
        );
    }
}

export default Coin;