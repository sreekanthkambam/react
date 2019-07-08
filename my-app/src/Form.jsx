import React from 'react';
import './Form.css';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 10,
            selectValue: 'Mango',
            checkedValue: true
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSelectValueChange = this.onSelectValueChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    render() {
        return <form className="form" onSubmit={this.onSubmit}>
            <input value={this.state.value} onChange={this.handleChange} />
            <br />
            <br />
            <select value={this.state.selectValue} onChange={this.onSelectValueChange}>
                <option value="GrapeFruit">GrapeFruit</option>
                <option value="Mango">Mango</option>
                <option value="Guava">Guava</option>
            </select>
            <br />
            <br />
            <input type="checkbox" checked={this.state.checkedValue} onChange={this.handleCheckboxChange} /> Hello
            <br />
            <br />
            <input type="submit" value="Submit me" />
        </form>;
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    onSubmit(e) {
        alert(`Form Submitted ${this.state.value}`);
        e.preventDefault();
    }

    onSelectValueChange(e) {
        this.setState({
            selectValue: e.target.value
        });
    }

    handleCheckboxChange(e) {
        this.setState({
            checkedValue: e.target.checked
        });
    }

}

export default Form;
