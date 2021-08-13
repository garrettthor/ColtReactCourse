import React, { Component } from 'react'
import Coin from './Coin';

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            face: ['heads', 'tails'],
            currentFace: 'heads',
            headsTotal: 0,
            tailsTotal: 0,
            totalFlips: 0,
            flipping: false
        };
        this.flip = this.flip.bind(this);
    }

    flip() {
        const newFace = this.state.face[Math.floor(Math.random()*2)]
        if (newFace === 'heads'){
            console.log(newFace)
            this.setState(sta => {
                return { headsTotal: sta.headsTotal + 1, flipping: true}
            })
            this.setState(sta => {
                return { totalFlips: sta.totalFlips + 1}
            })
        } else {
            console.log(newFace)
            this.setState(sta => {
                return { tailsTotal: sta.tailsTotal + 1, flipping: true}
            })
            this.setState(sta => {
                return { totalFlips: sta.totalFlips + 1}
            })
        }
        this.setState({ currentFace: newFace})

        setTimeout(() => {
            this.setState({ flipping: false })
        }, 1000)
        
    }

    render() {
        return (
            <div>
                <h1>The FLIPPA</h1>
                <Coin face={this.state.currentFace} flipping={this.state.flipping}/>

                <button onClick={this.flip} disabled={this.state.flipping}>
                    {this.state.flipping ? 'FLIPPIN\'' : 'Flip Me!'}
                </button>

                <h4>Current Heads Score: {this.state.headsTotal} - Current Tails Score: {this.state.tailsTotal}</h4>
                <h5>Total flips: {this.state.totalFlips}</h5>
            </div>
        );
    }
}

export default Flipper;