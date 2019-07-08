import React from 'react';
import './TemparatureInput.css';

class TemparatureInput extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return <div className="temp">
            Scale: {this.props.scale === 'f' ? 'Farenheit' : 'Celsius'}
            <br />
            Value: <input type="text" value={this.props.value} onChange={this.handleChange} />
        </div>
    }

    handleChange(e) {
        this.props.onTempChange(e.target.value);
    }

}

export default TemparatureInput;
