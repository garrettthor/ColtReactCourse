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
            die2: 'two',
            rolling: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if(this.state.rolling === false){
            let rand1 = Math.floor(Math.random() * 6);
            this.setState({ die1: this.props.sides[rand1] });

            let rand2 = Math.floor(Math.random() * 6);
            this.setState({ die2: this.props.sides[rand2]});

            this.setState({ rolling: true });
            setTimeout(() => {
                this.setState({ rolling: false });
            }, 1000);
        } else {
            return;
        };
        
    }

    render() {
        return(
            <div className="RollDice">
                <section className='RollDice-Die-Container'>
                    <Die face={this.state.die1} rolling={this.state.rolling}/>
                    <Die face={this.state.die2} rolling={this.state.rolling}/>
                </section>

                <section className='RollDice-Button-Container'>
                    <button onClick={this.handleClick}>
                        {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                    </button>
                </section>
            </div>
        )
    }
}

export default RollDice;