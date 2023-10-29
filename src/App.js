import Circle from "./components/Circle";
import { useState, useEffect } from "react";
import "./App.css";

const TIME_IN_MILISECONDS_TO_COUNTDOWN = 5 * 1000;

function App() {
  const [elapsedTime, setElapsedTime] = useState(
    TIME_IN_MILISECONDS_TO_COUNTDOWN
  ); //in ms
  const [score, setScore] = useState(0);
  const countDown = () => {
    setElapsedTime((time) => time - 10);
  };
  const onClick = () => {
    if (score > 29) {
      setElapsedTime(1000);
    } else if (score > 9) {
      setElapsedTime(TIME_IN_MILISECONDS_TO_COUNTDOWN / 2);
    } else {
      setElapsedTime(TIME_IN_MILISECONDS_TO_COUNTDOWN);
    }
    setScore((score) => score + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => countDown(), 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {elapsedTime > 0 ? (
        <>
          <p className="timer"> {(elapsedTime / 1000).toFixed(2)}</p>{" "}
          <Circle onClick={onClick} />
        </>
      ) : (
        <>
          <h1 className="failure">FAILURE</h1>
          <p className="score">Score: {score} </p>
          <button
            onClick={() => {
              setScore(0);
              setElapsedTime(TIME_IN_MILISECONDS_TO_COUNTDOWN);
            }}
          >
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default App;
