import "./powerControl.css";

export default function PowerControl(props) {
  return (
    <div
      className="PowerControl"
      onClick={() => {
        props.setPower((prevValue) => {
          if (prevValue) { // esvazia o visor se power era true
            props.setDisplayValue(!prevValue);
          }
          return !prevValue;
        });
      }}
    >
      <div
        className="PowerControlIndicator"
        style={{ float: props.power ? "right" : "left" }}
      ></div>
    </div>
  );
}
