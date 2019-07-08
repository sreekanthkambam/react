import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mainDate: new Date(),
            showMainDate: true,
            date: new Date()
        }

        this.updateMainDate = this.updateMainDate.bind(this);
        this.updateMainDateShowHide = this.updateMainDateShowHide.bind(this);
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.setState({
                date: new Date()
            });
        });
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const mainDateButton = <button onClick={this.updateMainDate}>Update main date</button>;
        return <div className="welcome">
                    <h1>
                        Hello World {this.props.name} at {this.state.date.toTimeString()}, 
                        {this.state.showMainDate && 
                            ' but the main date is ' + this.state.mainDate.toTimeString()}
                    </h1>
                    {this.state.showMainDate && mainDateButton}
                    <button onClick={this.updateMainDateShowHide}>
                        {this.state.showMainDate ? 'Hide' : 'Slow'} main date
                    </button>
                </div>;
    }

    updateMainDate() {
        this.setState({
            mainDate: new Date()
        })
    }

    updateMainDateShowHide() {
        this.setState((state, props) => {
            return {
                showMainDate: !state.showMainDate
            };
        });
    }

}

export default Welcome;
