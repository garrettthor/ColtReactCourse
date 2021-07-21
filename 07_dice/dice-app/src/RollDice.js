import React, { Component } from 'react'
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };

    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'two',
            die3: 'three',
            die4: 'four',
            die5: 'five',
            die6: 'six',
            rolling: false
        };
        this.roll = this.roll.bind(this);
    }

    roll(){
        //pick 6 new rolls
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDie3 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDie4 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDie5 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDie6 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        //set state with new rolls
        this.setState({die1: newDie1, die2: newDie2, die3: newDie3, die4: newDie4, die5: newDie5, die6: newDie6, rolling: true})
        //wait 1 second, then set rolling to false
        setTimeout(() => {
            this.setState({ rolling: false})
        }, 1000)
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die face={this.state.die1} shaking={this.state.rolling} />
                    <Die face={this.state.die2} shaking={this.state.rolling} />
                    <Die face={this.state.die3} shaking={this.state.rolling} />
                    <Die face={this.state.die4} shaking={this.state.rolling} />
                    <Die face={this.state.die5} shaking={this.state.rolling} />
                    <Die face={this.state.die6} shaking={this.state.rolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling...' : "Roll Dice!"}
                </button>
            </div>
        )
    }
}

export default RollDice