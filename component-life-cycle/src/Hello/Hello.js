import React, { Component } from 'react';

class Hello extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('[Hello.js] constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[Hello.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate() {
        console.log('[Hello.js] shouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        console.log('[Hello.js] componentDidMount');
    }

    getSnapshotBeforeUpdate() {
        console.log('[Hello.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Hello.js] componentDidUpdate');
    }

    render() {
        console.log('[Hello.js] render');
        return (
            <span>
                Hello 
            </span>
        );
    }

}

export default Hello;
