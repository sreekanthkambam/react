import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {

    render() {
        return <h1 className="welcome">Hello World {this.props.name}</h1>;
    }

}

export default Welcome;
