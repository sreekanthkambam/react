import React from 'react';

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) { // For a fallback UI
        return {
            hasError: true
        }
    }

    componentDidCatch(error) { // For logging errors
        alert(error);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
