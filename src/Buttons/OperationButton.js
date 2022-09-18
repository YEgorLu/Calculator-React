import "./button.css"

export function OperationButton (props){
  const content = props.content;
  const className = props.className || "";

  const operationClick = event => {
    let oper = event.target.textContent;
    props.setState({
      operation: oper,
      lastNumber: +props.screenContent,
      screenContent: oper
    })
  }

  const style = {
    backgroundColor: "orange"
  }

  return (
    <button style={style} className={`button ${className}`} onClick={operationClick}>{content}</button>
  )
}