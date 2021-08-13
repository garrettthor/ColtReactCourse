import React, { Component } from 'react'
import './Box.css';

class Box extends Component {
    static defaultProps = {
        palette: ['lightblue', 'medblue', 'mintgreen']
    }
    constructor(props){
        super(props);
        this.state = {
            color: this.props.palette[Math.floor(Math.random() * this.props.palette.length)]
        };
        this.randColor = this.randColor.bind(this);
    }

    randColor(){
        let currentColor = this.state.color;
        console.log(`Current color index: ${this.props.palette.indexOf(currentColor)}`)
        let colorChoice = Math.floor(Math.random() * this.props.palette.length);
        let newColor = this.props.palette[colorChoice];
        console.log(`New color index: ${colorChoice}`)
        console.log(`If we went DOWN a color the code would be: ${colorChoice - 1}`)
        console.log(`If we went UP a color the code would be: ${colorChoice + 1}`)
        
        if (newColor !== currentColor){
            this.setState(st => {
                return { color: newColor }
            })
            console.log('New color found.')
        } else {
            this.setState(st => {
                if(colorChoice - 1 === -1) {
                    console.log('Would go negative, we need to +1 ')
                    return { color: this.props.palette[colorChoice + 1]}
                } else {
                    console.log('Over 0, -1 from the array choice')
                    return { color: this.props.palette[colorChoice - 1]}
                }
            })
            console.log('Duplicate color avoided.')
        }
        
    }

    render() {
        return(
            <div className={`Box Box-color-${this.state.color}`} onClick={this.randColor}></div>
        );
    }
}

export default Box;