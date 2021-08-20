import React, { Component } from 'react'

class Box extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="Box">{this.props}</div>
        );  
    }
}

export default Box;