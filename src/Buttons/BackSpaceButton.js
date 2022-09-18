import "./button.css"

export function BackSpaceButton(props) {
  const backSpaceClick = () => {
    const screenText = props.screenContent;
    if (screenText[-1] === '.')
      props.setState({isFraction: false});
    const afterDelete = screenText.substring(0, screenText.length - 1);
    props.setState(afterDelete.length === 0 ? {screenContent: '0'} : {screenContent: afterDelete});
  }

  const style = {
    backgroundColor: "grey",
    fontWeight: "bold",
    transform: "rotate(180deg)"
  };

  return (
    <button style={style} className="button third" onClick={backSpaceClick}>&#8998;</button>
  )
}