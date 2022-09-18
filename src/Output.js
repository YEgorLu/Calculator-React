import './output.css'

export function Output(props) {
  return (
    <div className="screen">
      <ScreenText content={props.content}/>
    </div>
  );
}

function ScreenText(props) {
  return (
    <p>{props.content}</p>
  )
}