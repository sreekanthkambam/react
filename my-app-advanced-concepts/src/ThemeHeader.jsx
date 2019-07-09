import React from 'react';
import ThemeContext from './ThemeContext';

class ThemeHeader extends React.Component {

    static contextType = ThemeContext;

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const context = this.context;
        return <h1 style={{color: context.color, backgroundColor: context.bgColor}}>Theme Header {this.props.check}</h1>
    }

}

export default ThemeHeader;
