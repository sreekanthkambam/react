import React from 'react';
import './App.css';
import Welcome from './Welcome';

const App = () => {
    return <div className="app">
                <h1>My Application</h1>
                <Welcome name="Sreekanth" />
                <Welcome name="Charishma" />
            </div>;
};

export default App;
