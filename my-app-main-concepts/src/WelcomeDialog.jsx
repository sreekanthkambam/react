import React from 'react';
import Dialog from './Dialog';

class WelcomeDialog extends React.Component {

    render() {
        return <div>
            {this.props.children}
            <Dialog></Dialog>
            {this.props.left}
            {this.props.right}
        </div>;
    }

}

export default WelcomeDialog;
