import React from 'react';

const validationComponent = (props) => {
    const validationText = props.textLength > 5
                            ? 'Text long enough'
                            : 'Text too short';
    return (
        <p>{validationText}</p>
    );
};

export default validationComponent;
