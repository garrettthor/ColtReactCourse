import React, { Component } from 'react'
import './Box.css';

class Box extends Component {
    static defaultProps = {
        palette: ['lightblue', 'medblue', 'mintgreen', 'darkteal', 'darkblue', 'shadygreen']
    }
    constructor(props){
        super(props);
        this.state = {
            color: this.props.palette[Math.floor(Math.random() * this.props.palette.length)]
        };
        this.randColor = this.randColor.bind(this);
    }

    randColor(){
        // This function will pick a new color.  First it picks a random number to use as an index within the range of the palette array.  Then, newColor is assigned a string corresponding to the color picked by that randomly chosen index.

        let currentColor = this.state.color;
        // console.log(`Current color index: ${this.props.palette.indexOf(currentColor)}`)
        let colorChoice = Math.floor(Math.random() * this.props.palette.length);
        let newColor = this.props.palette[colorChoice];
        // console.log(`New color index: ${colorChoice}`)
        // console.log(`If we went DOWN a color the code would be: ${colorChoice - 1}`)
        // console.log(`If we went UP a color the code would be: ${colorChoice + 1}`)
        

        // To deal with repeat color issues, we make sure that the newColor string DOES NOT match the currentColor string.
        if (newColor !== currentColor){
            this.setState(st => {
                // As long as that's cool, we setState the color property in state to the newColor string.
                return { color: newColor }
            })
            console.log('New color found.')
        } else {
            // HOWEVER, if there is a duplicate choice, we then need to either bump the random index chosen UP ONE or DOWN ONE.
            this.setState(st => {
                // ALSO HOWEVER, if reducing the index by 1 would set the array into a negative index, and therefor an UNDEFINED color, we need to bump the index UP by one instead to the next color from the currentColor.
                if(colorChoice - 1 === -1) {
                    // console.log('Would go negative, we need to +1 ')
                    return { color: this.props.palette[colorChoice + 1]}
                } else {
                    // as long as that's not the case, we can "default" subtract 1 from the duplicate index choice, ensuring that we never go ABOVE the palette array length, resulting in another UNDEFINED color.

                    // console.log('Over 0, -1 from the array choice')
                    return { color: this.props.palette[colorChoice - 1]}
                }
            })
            console.log(`Duplicate color avoided`)
        }
        
    }

    render() {
        return(
            <div className={`Box Box-color-${this.state.color}`} onClick={this.randColor}></div>
        );
    }
}

export default Box;