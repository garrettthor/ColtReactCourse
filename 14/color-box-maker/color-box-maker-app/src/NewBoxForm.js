import React, { Component } from 'react'

class NewBoxForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: '',
            height: '',
            color: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value})
        alert(this.state)
        // this.props.addBox(this.state)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="width">Width: </label>
                    <input
                        type="number"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="height">Height: </label>
                    <input
                        type="number"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                    />
                </div>
                
                <div>
                    <label htmlFor="color">Color: </label>
                    <input
                        type="text"
                        name="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                    />
                </div>
                
                <button>Make! That! Box!</button>
            </form>
        );
    }
}

export default NewBoxForm;