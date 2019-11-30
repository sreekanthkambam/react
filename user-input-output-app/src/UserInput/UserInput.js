import React from 'react';

const userInput = (props) => {
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
                        value={props.name}
                        onChange={props.onUserInputChange} />
                </p>
            </div>
    );
};

export default userInput;

