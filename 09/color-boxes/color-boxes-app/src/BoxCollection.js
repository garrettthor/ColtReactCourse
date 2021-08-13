import React, { Component } from 'react'
import Box from './Box';
import './BoxCollection.css';

class BoxCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div className="BoxCollection">
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </div>
        );
    }
}

export default BoxCollection;