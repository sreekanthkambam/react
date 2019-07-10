import React from 'react';

const MyFancyButton = React.forwardRef((props, ref) => {
    return <button ref={ref}>My Fancy Button</button>
});

export default MyFancyButton;
