import "./button.css"

export function FractionButton(props){
  const fractionClick = event => {
    if(!props.isFraction){
      props.setState({
        isFraction: true,
        screenContent: props.screenContent + event.target.textContent
      })
    }
  }

  const style = {
    //backgroundColor: "orange"
  }

  return (
    <button style={style} className="button second" onClick={fractionClick}>.</button>
  );
}