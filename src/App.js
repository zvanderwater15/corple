import Circle from "./components/Circle";
import { useState, useEffect } from "react";
import "./App.css";

const TIME_IN_MILISECONDS_TO_COUNTDOWN = 5 * 1000;

function App() {
  const [elapsedTime, setElapsedTime] = useState(
    TIME_IN_MILISECONDS_TO_COUNTDOWN
  );
  const [timeLimit, setTimeLimit] = useState(
    TIME_IN_MILISECONDS_TO_COUNTDOWN
  );
  const [score, setScore] = useState(0);
  const countDown = () => {
    setElapsedTime((time) => time - 10);
  };
  const onClick = () => {
    let timeLimit;
    if (score > 29) {
      timeLimit = TIME_IN_MILISECONDS_TO_COUNTDOWN / 5;
    } else if (score > 9) {
      timeLimit = TIME_IN_MILISECONDS_TO_COUNTDOWN / 2;
    } else {
      timeLimit = TIME_IN_MILISECONDS_TO_COUNTDOWN;
    }
    setTimeLimit(timeLimit);
    setElapsedTime(timeLimit); // hard mode
    setScore((score) => score + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => countDown(), 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    alert("Click the circle. Keep clicking it.")
  }, []);

  return (
    <div className="App">
      {elapsedTime > 0 ? (
        <>
          <p className="timer"> {(elapsedTime / 1000).toFixed(1)}</p>{" "}
          <Circle onClick={onClick} decayTimeInMs={timeLimit}/>
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
