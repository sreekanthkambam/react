import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>This is the User Output</p>
            <p>User Name: {props.name}</p>
        </div>
    );
};

export default userOutput;