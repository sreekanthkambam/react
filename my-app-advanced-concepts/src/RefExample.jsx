import React from 'react';
import MyButton from './MyButton';
import MyFancyButton from './MyFancyButton';

class RefExample extends React.Component {

    constructor(props) {
        super(props);
        this.sampleRef = React.createRef();
        this.buttonRef = React.createRef();
        this.fancyButtonRef = React.createRef();

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        // Ref attached to html element works as Dom node
        // Ref attached to React component gives the instance of that component
        // Ref attached to React forward Element will forward it's render content and will gives the DOM node at which it is attached
        return <div>
                <h1 ref={this.sampleRef} onClick={this.handleClick}>Hello World</h1>
                <MyButton ref={this.buttonRef} />
                <MyFancyButton ref={this.fancyButtonRef} />
            </div>;
    }

    handleClick() {
        console.log(this.sampleRef.current.innerText);
        console.log(this.buttonRef.current.hello());
        console.log(this.fancyButtonRef.current.innerText);
    }

}

export default RefExample;
