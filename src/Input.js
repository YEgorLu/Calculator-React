import React, {useState} from "react";
import './styles/input.css'
import {OperationButton} from "./Buttons/OperationButton";
import {ResetButton} from "./Buttons/ResetButton";
import {FractionButton} from "./Buttons/FractionButton";
import {ChangeButton} from "./Buttons/ChangeButton";
import {ResultButton} from "./Buttons/ResultButton";
import {BackSpaceButton} from "./Buttons/BackSpaceButton";
import {NumberButton} from "./Buttons/NumberButton";

export function Input({screenContent, setScreenContent, ...props}) {
  const [lastNumber, setLastNumber] = useState();
  const [isFraction, setIsFraction] = useState(false);
  const [operation, setOperation] = useState();

  function resetState() {
    setLastNumber(undefined);
    setIsFraction(false);
    setOperation(undefined);
    setScreenContent("0");
  }

  return (
    <>
      <div className="line">
        <ResetButton resetState={resetState}/>
        <OperationButton setLastNumber={setLastNumber} setOperation={setOperation}
                         screenContent={screenContent} setScreenContent={setScreenContent}>
          %
        </OperationButton>
        <ChangeButton setScreenContent={setScreenContent} screenContent={screenContent}/>
        <OperationButton setLastNumber={setLastNumber} setOperation={setOperation}
                         screenContent={screenContent} setScreenContent={setScreenContent}>
          /
        </OperationButton>
      </div>
      <div className="line">
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          7
        </NumberButton>
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          8
        </NumberButton>
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          9
        </NumberButton>
        <OperationButton setLastNumber={setLastNumber} setOperation={setOperation}
                         screenContent={screenContent} setScreenContent={setScreenContent}>
          X
        </OperationButton>
      </div>
      <div className="line">
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          4
        </NumberButton>
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          5
        </NumberButton>
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          6
        </NumberButton>
        <OperationButton setLastNumber={setLastNumber} setOperation={setOperation}
                         screenContent={screenContent} setScreenContent={setScreenContent}>
          -
        </OperationButton>
      </div>
      <div className="line">
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          1
        </NumberButton>
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          2
        </NumberButton>
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          3
        </NumberButton>
        <OperationButton setLastNumber={setLastNumber} setOperation={setOperation}
                         screenContent={screenContent} setScreenContent={setScreenContent}>
          +
        </OperationButton>
      </div>
      <div className="line">
        <NumberButton setOperation={setOperation} screenContent={screenContent} setScreenContent={setScreenContent}>
          0
        </NumberButton>
        <FractionButton setIsFraction={setIsFraction} screenContent={screenContent}
                        isFraction={isFraction} setScreenContent={setScreenContent}/>
        <BackSpaceButton setScreenContent={setScreenContent} screenContent={screenContent}
                         setIsFraction={setIsFraction}/>
        <ResultButton setScreenContent={setScreenContent} lastNumber={lastNumber}
                      screenContent={screenContent} operation={operation}
                      setLastNumber={setLastNumber}/>
      </div>
    </>
  )
}

