import "./button.css"

export function BackSpaceButton({setIsFraction, screenContent, setScreenContent,...props}) {
  const backSpaceClick = () => {
    if (screenContent[-1] === '.')
      setIsFraction(false);
    const afterDelete = screenContent.substring(0, screenContent.length - 1);
    setScreenContent(afterDelete.length === 0 ? '0' : afterDelete);
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