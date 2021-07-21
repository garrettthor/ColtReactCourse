import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return(
            <div>
                <i className={`fas fa-dice-${this.props.face} Die ${this.props.shaking? 'shaking' : ''}`}></i>
            </div>
        );
    }
}

export default Die;