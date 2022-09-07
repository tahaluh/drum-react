import "./soundButton.css";

export default function SoundButton(props) {
  return (
    <button className="SoundButton" style={{ gridArea: props.value }}>
      {props.value}
    </button>
  );
}
