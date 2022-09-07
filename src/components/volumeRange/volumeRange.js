import "./volumeRange.css";

export default function VolumeRange(props) {
  
  const handleChange = (e) => {
    if (props.power) {
      props.setVolume(e.target.value);
      props.setDisplayValue("Volume: "+e.target.value)
    }
  }

  return (
    <div className="VolumeRange">
      <input type="range" min="0" max="100" onChange={handleChange} value={props.volume}/>
    </div>
  );
}
