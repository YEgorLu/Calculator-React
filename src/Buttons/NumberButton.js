import "./button.css"

export function NumberButton({screenContent, setScreenContent, setOperation, children, className="", ...props}){
  const numberClick = event => {
    const pressedText = event.target.textContent;
    const screenText = screenContent;
    if (screenText === "0")
      setScreenContent(pressedText);
    else if (Number.isNaN(+pressedText) || Number.isNaN(+screenText)) {
      setScreenContent(pressedText);
      setOperation(screenText);
    } else {
      setScreenContent(screenText + pressedText)
    }
  }

  return(
    <button className={`button ${className}`} onClick={numberClick}>{children}</button>
  )
}