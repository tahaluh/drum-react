import "./controlsDiv.css";
import PowerControl from "../powerControl/powerControl.js";
import VolumeRange from "../volumeRange/volumeRange";
import BankControl from "../bankControl/bankControl";
import Visor from "../visor/visor";
import { useEffect, useState } from "react";

export default function ControlsDiv(props) {
  const [displayValue, setDisplayValue] = useState("");
  
  return (
    <div className="ControlsDiv">
      <PowerControl
        power={props.power}
        setPower={props.setPower}
        setDisplayValue={setDisplayValue}
      ></PowerControl>
      <Visor displayValue={displayValue}></Visor>
      <VolumeRange
        power={props.power}
        volume={props.volume}
        setVolume={props.setVolume}
        setDisplayValue={setDisplayValue}
      ></VolumeRange>
      <BankControl
        bankState={props.bankState}
        setBankState={props.setBankState}
        setDisplayValue={setDisplayValue}
      ></BankControl>
    </div>
  );
}
