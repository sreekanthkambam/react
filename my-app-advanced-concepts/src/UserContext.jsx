import React from 'react';

export const users = {
    sreekanth: 'Sreekanth',
    cherry: 'Charishsma'
};

const UserContext = React.createContext(users.sreekanth);

export default UserContext;
