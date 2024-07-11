import React,{Component, PureComponent} from 'react';

class PureComponentExample extends PureComponent{

    constructor(){
        super();
        this.state={
            data: 10
        }
    }

    render(){
        console.log(this.state.data)
        return (
            <>
            <h1>Pure Component</h1>
            <button onClick={() => {this.setState({data: 20})}}>Update state</button>
            </>
        )
    }

}

export default PureComponentExample;
