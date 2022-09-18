import {Output} from './Output'
import {Input} from './Input'
import './index.css';
import React from "react";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      lastNumber: undefined,
      currentNumber: undefined,
      isFraction: false,
      operation: undefined,
      screenContent: "0"
    }
  }

  render(){
    return (
      <div className="calculator">
        <Output content={this.state.screenContent}/>
        <Input lastNumber={this.state.lastNumber} currentNumber={this.state.currentNumber}
               isFraction={this.state.isFraction} operation={this.state.operation}
               screenContent={this.state.screenContent} setState={state => this.setState(state)}/>
      </div>
    );
  }
}

export default App;
