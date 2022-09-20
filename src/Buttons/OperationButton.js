import "./button.css"

export function OperationButton ({setOperation, setScreenContent,
                                   setLastNumber, screenContent,
                                   children, className="", ...props}){
  const operationClick = event => {
    let oper = event.target.textContent;
    setOperation(oper);
    setLastNumber(+screenContent);
    setScreenContent(oper);
  }

  const style = {
    backgroundColor: "orange"
  }

  return (
    <button style={style} className={`button ${className}`} onClick={operationClick}>{children}</button>
  )
}