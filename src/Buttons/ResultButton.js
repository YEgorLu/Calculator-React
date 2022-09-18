import operations from "../operations.mjs";
import "./button.css"

export function ResultButton(props){
  const resultClick = () => {
    let lastNumber = props.lastNumber;
    if(lastNumber){
      const currentNumber = +props.screenContent;
      lastNumber = operations[props.operation](lastNumber, currentNumber);
      props.setState({
        screenContent: lastNumber.toString(),
        lastNumber: lastNumber,
        currentNumber: currentNumber
      });
    }
  }

  const style = {
    backgroundColor: "orange"
  }

  return (
    <button style={style} className="button fourth" onClick={resultClick}>=</button>
  )
}