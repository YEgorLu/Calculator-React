import "./button.css"

export function NumberButton(props){
  const numberClick = event => {
    const pressedText = event.target.textContent;
    const screenText = props.screenContent;
    if (screenText === "0")
      props.setState({
        screenContent: pressedText
      });
    else if (Number.isNaN(+pressedText) || Number.isNaN(+screenText)) {
      props.setState({
        screenContent: pressedText,
        operation: screenText
      });
    } else {
      props.setState({
        screenContent: screenText + pressedText
      })
    }
  }

  return(
    <button className={`button ${props.className || ""}`} onClick={numberClick}>{props.content}</button>
  )
}