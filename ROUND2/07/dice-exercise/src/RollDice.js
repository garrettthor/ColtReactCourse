import React, { Component } from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component{

    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    
    constructor(props){
        super(props);
        this.state = {
            die1: 'one',
            die2: 'two'
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let rand1 = Math.floor(Math.random() * 6);
        this.setState({ die1: this.props.sides[rand1] });
        let rand2 = Math.floor(Math.random() * 6);
        this.setState({ die2: this.props.sides[rand2]});
    }

    render() {
        return(
            <div className="RollDice">
                <section className='RollDice-Die-Container'>
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/>
                </section>

                <section className='RollDice-Button-Container'>
                    <button onClick={this.handleClick}>Roll the Dice!</button>
                </section>
            </div>
        )
    }
}

export default RollDice;