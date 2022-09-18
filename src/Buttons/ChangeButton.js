import "./button.css"

export function ChangeButton(props){
  const changeClick = () =>{
    props.setState({
      screenContent: -props.screenContent
    })
  }

  const style = {
    backgroundColor: "orange"
  }

  return (
    <button style={style} className="button" onClick={changeClick}>+/-</button>
  )
}