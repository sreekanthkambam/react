import React from 'react';
import './App.css';
import ThemeContext, {themes} from './ThemeContext';
import ThemeHeader from './ThemeHeader';
import UserContext, {users} from './UserContext';
import ErrorBoundary from './ErrorBoundary';
import RefExample from './RefExample';
import Table from './Table';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: themes.dark,
            user: users.cherry,
            hello: 'USer'
        }

        this.changeTheme = this.changeTheme.bind(this);
    }

    render() {
        return <div className="app">
            <ErrorBoundary>
                <h1>Advanced Guide</h1>
                <div>
                    <button onClick={this.changeTheme}>
                        Change Theme
                    </button>
                </div>
                <ThemeContext.Provider value={this.state.theme}>
                    <UserContext.Provider value={this.state.user}>
                        <ThemeHeader check={this.state.hello} />
                        <ThemeContext.Consumer>
                            {value => <h2>Color is: {value.color}</h2>}
                        </ThemeContext.Consumer>
                        <UserContext.Consumer>
                            {value => <h2>User is: {value}</h2>}
                        </UserContext.Consumer>
                    </UserContext.Provider>
                </ThemeContext.Provider>
                <br />
                <br />
                <ThemeHeader check={this.state.hello} />
                <ThemeContext.Consumer>
                    {value => <h2>Color is: {value.color}</h2>}
                </ThemeContext.Consumer>
                <RefExample />
                <Table />
            </ErrorBoundary>
        </div>;
    }

    changeTheme() {
        this.setState((state, props) => {
            return {
                theme: state.theme.color === 'white' ? themes.dark : themes.light,
                hello: 'Sree'
            }
        });
    }

}

export default App;
