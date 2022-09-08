import "./visor.css";

export default function Visor(props) {
  return (
    <div className="Visor" title={props.displayValue}>
      <p className="VisorText">{props.displayValue}</p>
    </div>
  );
}
