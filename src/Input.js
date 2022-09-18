import React from "react";
import './input.css'
import {OperationButton} from "./Buttons/OperationButton";
import {ResetButton} from "./Buttons/ResetButton";
import {FractionButton} from "./Buttons/FractionButton";
import {ChangeButton} from "./Buttons/ChangeButton";
import {ResultButton} from "./Buttons/ResultButton";
import {BackSpaceButton} from "./Buttons/BackSpaceButton";
import {NumberButton} from "./Buttons/NumberButton";

export function Input(props){
    return (
      <>
        <div className="line">
          <ResetButton setState={props.setState}/>
          <OperationButton setState={props.setState}
                           content={"%"} screenContent={props.screenContent}/>
          <ChangeButton setState={props.setState} screenContent={props.screenContent}/>
          <OperationButton setState={props.setState}
                           content={"/"} screenContent={props.screenContent}/>
        </div>
        <div className="line">
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="7"/>
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="8"/>
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="9"/>
          <OperationButton setState={props.setState}
                           content={"X"} screenContent={props.screenContent}/>
        </div>
        <div className="line">
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="4"/>
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="5"/>
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="6"/>
          <OperationButton setState={props.setState}
                           content={"-"} screenContent={props.screenContent}/>
        </div>
        <div className="line">
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="1"/>
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="2"/>
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="3"/>
          <OperationButton setState={props.setState}
                           content={"+"} screenContent={props.screenContent}/>
        </div>
        <div className="line">
          <NumberButton setState={props.setState} screenContent={props.screenContent}
                        content="0" className="first"/>
          <FractionButton setState={props.setState} screenContent={props.screenContent}
                          isFraction={props.isFraction}/>
          <BackSpaceButton setState={props.setState} screenContent={props.screenContent}/>
          <ResultButton setState={props.setState} lastNumber={props.lastNumber}
                        screenContent={props.screenContent} operation={props.operation}/>
        </div>
      </>
    )
}

