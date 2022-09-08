import "./soundButton.css";

export default function SoundButton(props) {
  const handleClick = () => {
    if (props.power) {
      const sound = document.getElementById(props.audio);

      sound.currentTime = 0;
      sound.play();

      props.setDisplayValue(
        props.audio
          .replaceAll("-", " ")
          .replaceAll("_1", "")
          .replaceAll("_", " ")
          .replace(".mp3", "")
      );
    }
  };

  return (
    <button
      className="SoundButton"
      style={{ gridArea: props.value }}
      onClick={handleClick}
    >
      {props.value}
    </button>
  );
}
