import "./powerControl.css";

export default function PowerControl(props) {
  return (
    <div className="PowerControlDiv">
      <h2 className="PowerControlTittle">Power</h2>
      <div title="OFF/ON"
        className="PowerControl"
        onClick={() => {
          props.setPower((prevValue) => !prevValue);
          props.setDisplayValue("");
        }}
      >
        <div
          className="PowerControlIndicator"
          style={{ float: props.power ? "right" : "left" }}
        ></div>
      </div>
    </div>
  );
}
