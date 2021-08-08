import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    removeBox() {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== box.id)
        })
    }

    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }
        ))
    }

    render() {
        const boxes = this.state.boxes.map(box => (
            <Box
                key={box.id}
                id={box.id}
                width={box.width}
                height={box.height}
                color={box.color}
                removeBox={this.removeBox}
            />
        ))
        return(
            <div className="BoxList">
                <div>
                    <h1>Bitch, I'm a BoxList!</h1>
                    <div>
                        <NewBoxForm addBox={this.addBox}/>
                    </div>
                    <div>
                        {boxes}
                    </div>
                    
                </div>
                
                
            </div>
        );
    }
}

export default BoxList;