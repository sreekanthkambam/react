import React from 'react';
import './Calculator.css';
import TemparatureInput from './TemparatureInput';

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            temperature: 100
        }

        this.handleFarChange = this.handleFarChange.bind(this);
        this.handleCelChange = this.handleCelChange.bind(this);
    }

    render() {
        const celValue = this.tryConvert(this.state.temperature, this.toCelsius);
        return <div className="calculator">
            <TemparatureInput scale="f" value={this.state.temperature} onTempChange={this.handleFarChange} />
            <TemparatureInput scale="c" value={celValue} onTempChange={this.handleCelChange} />
        </div>
    }

    handleFarChange(temperature) {
        this.setState({
            temperature
        });
    }

    handleCelChange(temperature) {
        this.setState({
            temperature: this.tryConvert(temperature, this.toFahrenheit)
        });
    }

    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }
      
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }

}

export default Calculator;
