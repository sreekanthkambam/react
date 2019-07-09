import React from 'react';

export const themes = {
    dark: {
        color: 'black',
        bgColor: 'white'
    },
    light: {
        color: 'white',
        bgColor: 'black'
    }
};

const ThemeContext = React.createContext(themes.light);

export default ThemeContext;
