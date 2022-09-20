import './styles/output.css'

export function Output(props) {
  return (
    <div className="screen">
      <ScreenText>{props.children}</ScreenText>
    </div>
  );
}

function ScreenText(props) {
  return (
    <p>{props.children}</p>
  )
}