import "./App.css";
import SoundButton from "./components/soundButton/soundButton";
import ControlsDiv from "./components/controlsDiv/controlsDiv";
import { useState } from "react";

function App() {
  const [power, setPower] = useState(true);
  const [bankState, setBankState] = useState(false);
  const [volume, setVolume] = useState(50);
  const buttonArray = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  return (
    <div className="App">
      <div className="DrumMachineDiv">
        <div className="SoundPadDiv">
          {buttonArray.map((value) => {
            return (
              <SoundButton
                key={value}
                value={value}
                power={power}
              ></SoundButton>
            );
          })}
        </div>
        <ControlsDiv
          power={power}
          setPower={setPower}
          bankState={bankState}
          setBankState={setBankState}
          volume={volume}
          setVolume={setVolume}
        ></ControlsDiv>
      </div>
    </div>
  );
}

export default App;
