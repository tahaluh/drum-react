import "./volumeRange.css";

export default function VolumeRange(props) {
  
  const handleChange = (e) => {
    if (props.power) {
      props.setVolume(e.target.value);
      props.setDisplayValue("Volume: "+e.target.value)

      props.audiosNames.map((audio) => {
        document.getElementById(audio).volume = e.target.value/100;
      })
    }
  }

  return (
    <div className="VolumeRange" title="Volume">
      <input className="VolumeSlider" type="range" min="0" max="100" onChange={handleChange} value={props.volume}/>
    </div>
  );
}
