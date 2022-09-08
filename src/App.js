import "./App.css";
import SoundButton from "./components/soundButton/soundButton";
import ControlsDiv from "./components/controlsDiv/controlsDiv";
import { useState } from "react";

function App() {
  const [power, setPower] = useState(true);
  const [bankState, setBankState] = useState(false);
  const [volume, setVolume] = useState(50);
  const [displayValue, setDisplayValue] = useState("");
  const buttonArray = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const regexAudioId = /(\w|\-)+?(?:\.mp3)/;
  const audiosUrls = [
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    "/audios/Cavalo.mp3",
    "/audios/Danca-gatinho.mp3",
    "/audios/Ele-gosta.mp3",
    "/audios/Pare.mp3",
    "/audios/Rapaz.mp3",
    "/audios/Tome.mp3",
    "/audios/Uepa.mp3",
    "/audios/Ui.mp3",
    "/audios/Vai-dar-namoro.mp3",
  ];
  const audiosNames = audiosUrls.map((url) => regexAudioId.exec(url)[0]);

  console.log(process.env.PUBLIC_URL)

  return (
    <div className="App">
      <div className="DrumMachineDiv">
        <div className="SoundPadDiv">
          {buttonArray.map((value, index) => {
            return (
              <SoundButton
                key={value}
                value={value}
                power={power}
                audio={bankState ? audiosNames[index+9]: audiosNames[index]}
                setDisplayValue={setDisplayValue}
              ></SoundButton>
            );
          })}
        </div>
        <ControlsDiv
          power={power}
          setPower={setPower}
          bankState={bankState}
          setBankState={setBankState}
          displayValue={displayValue}
          setDisplayValue={setDisplayValue}
          volume={volume}
          setVolume={setVolume}
          audiosNames={audiosNames}
        ></ControlsDiv>
        <div className="AudiosDiv">
          {audiosUrls.map((audioUrl, index) => {
            return (
              <audio
                preload="auto"
                src={index >= 9 ? process.env.PUBLIC_URL + audioUrl : audioUrl}
                key={regexAudioId.exec(audioUrl)[0]}
                id={regexAudioId.exec(audioUrl)[0]}
              ></audio>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
