import "./bankControl.css";

export default function BankControl(props) {
  return (
    <div
      className="BankControl"
      onClick={() => {
        props.setBankState((prevValue) => !prevValue);
      }}
    >
      <div className="BankControlIndicator" style={{ float: props.bankState ? "right" : "left"}}></div>
    </div>
  );
}
