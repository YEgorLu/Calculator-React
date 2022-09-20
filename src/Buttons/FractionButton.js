import "./button.css"

export function FractionButton({screenContent, setIsFraction, setScreenContent, isFraction, ...props}) {
  const fractionClick = event => {
    if (!isFraction) {
      setIsFraction(true);
      setScreenContent(screenContent + event.target.textContent);
    }
  }


  const style = {
    //backgroundColor: "orange"
  }

  return (
    <button style={style} className="button second" onClick={fractionClick}>.</button>
  );
}