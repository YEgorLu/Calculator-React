import "./button.css"

export function ChangeButton({setScreenContent, screenContent, ...props}){
  const changeClick = () =>{
    setScreenContent(-screenContent);
  }

  const style = {
    backgroundColor: "orange"
  }

  return (
    <button style={style} className="button" onClick={changeClick}>+/-</button>
  )
}