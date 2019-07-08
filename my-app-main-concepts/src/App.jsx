import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Form from './Form';
import Calculator from './Calculator';
import WelcomeDialog from './WelcomeDialog';

const App = () => {
    const names = [ 'Sreekanth', 'Charishma'];
    const welcomeNames = names.map((name) => <Welcome key={name} name={name}/>);
    return <div className="app">
                <h1>My Application</h1>
                {welcomeNames}
                <Form />
                <Calculator />
                <WelcomeDialog left={<h1>Sample Left</h1>} right={<h1>Sample Right</h1>}>
                    <h1>Hi Welcome to My application</h1>
                </WelcomeDialog>
            </div>;
};

export default App;
