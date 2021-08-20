import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.renderBoxes = this.renderBoxes(this);
    }

    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }));
    }

    renderBoxes() {
        return (
            <ul>
                {this.state.boxes.map(box =>(
                    <li>
                        <Box width={this.state.boxes.width} height={this.state.boxes.height} color={this.state.boxes.color}/>
                    </li>
                ))}
            </ul>
        );
    } 

    render() {
        return(
            <div className="BoxList">
                <div>
                    <h1>Bitch, I'm a BoxList!</h1>
                    {/* {this.renderBoxes()} */}
                </div>
                <div>
                    <NewBoxForm addBox={this.addBox}/>
                </div>
                
            </div>
        );
    }
}

export default BoxList;