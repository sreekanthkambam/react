import React, { Component } from 'react';
import Hello from '../Hello/Hello';

class Persons extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('[Persons.js] constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate() {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }

    getSnapshotBeforeUpdate() {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] render');
        const persons = this.props.persons.map((person) => {
            return (
                <div key={person.id}>
                    <Hello /> {person.name}
                </div>
            )
        });
        return persons;
    }

}

export default Persons;
