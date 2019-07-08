import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Form from './Form';

const App = () => {
    const names = [ 'Sreekanth', 'Charishma'];
    const welcomeNames = names.map((name) => <Welcome key={name} name={name}/>);
    return <div className="app">
                <h1>My Application</h1>
                {welcomeNames}
                <Form />
            </div>;
};

export default App;
