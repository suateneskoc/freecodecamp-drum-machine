import { useEffect, useState } from "react";

const drumPads = [
  {
    key: "Q",
    keyCode: 81,
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    keyCode: 87,
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    keyCode: 69,
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    keyCode: 65,
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    keyCode: 83,
    id: "Clap",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    keyCode: 68,
    id: "Open-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    keyCode: 90,
    id: "Kick-n-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    keyCode: 88,
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    keyCode: 67,
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

function App() {
  const [displayText, setDisplayText] = useState("");

  const playSound = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplayText(drumPads.find((pad) => pad.key === key).id);
    setTimeout(() => setDisplayText(""), 500);
  };

  const handleKeyPress = (e) => {
    if (drumPads.find((pad) => pad.keyCode === e.keyCode)) {
      playSound(e.key.toUpperCase());
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex items-center flex-1">
        <div
          id="drum-machine"
          className="flex flex-wrap justify-between gap-y-4 w-80"
        >
          {drumPads.map((pad) => (
            <button
              className="drum-pad w-[30%] aspect-square rounded-md bg-gray-100 text-xl hover:bg-gray-200 active active:bg-gray-300 transition"
              id={pad.id}
              onClick={() => playSound(pad.key.toUpperCase())}
              key={pad.id}
            >
              {pad.key}
              <audio src={pad.src} className="clip" id={pad.key}></audio>
            </button>
          ))}
          <div
            id="display"
            className="w-full h-24 flex items-center justify-center bg-gray-200 rounded-md text-2xl"
          >
            {displayText}
          </div>
        </div>
      </div>
      <span className="mb-2">
        View code on{" "}
        <a
          href="https://github.com/suateneskoc/freecodecamp-drum-machine"
          className="text-blue-600 font-semibold"
        >
          GitHub
        </a>
      </span>
    </div>
  );
}

export default App;
