import React, { Component } from 'react'
import LotteryBall from './LotteryBall';
import './Lottery.css';

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            nums: Array.from({ length: this.props.numBalls })
        }
        this.generate = this.generate.bind(this)
    };
    

    generate(){
        this.setState(curState => ({
            nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum + 1))
        }))
    }

    render() {
        return(
            <section className="Lottery">
                <div className="Lottery-container">
                    <div>
                        <h2>{this.props.title}</h2>
                    </div>
                    
                    <div className="Lottery-ball-container">
                        {this.state.nums.map(n => 
                        <LotteryBall num={n} />
                        )}
                    </div>

                    <div>
                        <button onClick={this.generate}>Gen Lotto Nums</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default Lottery;