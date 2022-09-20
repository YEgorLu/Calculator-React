import operations from "../operations.mjs";
import "./button.css"

export function ResultButton({lastNumber, screenContent,
                               operation, setScreenContent,
                               setLastNumber,...props}){
  const resultClick = () => {
    if(lastNumber){
      const currentNumber = +screenContent;
      const newLastNumber = operations[operation](lastNumber, currentNumber);
      setScreenContent(newLastNumber.toString());
      setLastNumber(newLastNumber);
    }
  }

  const style = {
    backgroundColor: "orange"
  }

  return (
    <button style={style} className="button fourth" onClick={resultClick}>=</button>
  )
}