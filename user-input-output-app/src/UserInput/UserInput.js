import React, { Component } from 'react';

class UserInput extends Component {
    
    render = () => {
        const style = {
            color: 'red'
        };

        return (
            <div>
                <p>
                    User Name:
                    <input 
                        type="text"
                        style={style}
                        value={this.props.name}
                        onChange={this.props.onUserInputChange} />
                </p>
            </div>
        );
    }

}

export default UserInput;
