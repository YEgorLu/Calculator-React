import "./button.css"

export function ResetButton(props){
  const resetCalculator = () => {
    props.setState({
      lastNumber: undefined,
      currentNumber: undefined,
      operation: undefined,
      screenContent: '0',
      isFraction: false
    })
  }

  const style={
    backgroundColor: "#DC143C"
  };

  return (
    <button style={style} className="button" onClick={resetCalculator}>C</button>
  );
}