import "./button.css"

export function ResetButton({resetState}){
  const style={
    backgroundColor: "#DC143C"
  };

  return (
    <button style={style} className="button" onClick={resetState}>C</button>
  );
}