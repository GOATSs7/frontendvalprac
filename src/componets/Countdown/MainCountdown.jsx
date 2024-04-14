// MainCountdown.js
import { useState, useEffect } from "react";
import TimerInput from "./TimerInput";
import ShowTimer from "./ShowTimer";

const MainCountdown = () => {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    if (
      hours < 0 ||
      minutes < 0 ||
      seconds < 0 ||
      (hours === 0 && minutes === 0 && seconds === 0)
    ) {
      alert("Invalid Input");
    } else {
      setIsStart(true);
    }
  };

  const handleInput = (e) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;

    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };
  //pause

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };
  //resume

  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours);
  };
  //handle reset
  const handleReset = () => {
    setIsStart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);

    clearInterval(timerId);
  };

  // func for interval
  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((s) => s - 1);
    } else if (sec === 0 && min > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else if (min === 0) {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (sec === 0 && min === 0 && hr === 0) {
      // resetTimer();
      handleReset();
      alert("Timer is finished");
      clearInterval(tid);
      return;
    }
  };

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid);
      }, 1000);
      setTimerId(tid);
    }

    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);

  return (
    <div>
      <h1>Count Down</h1>

      {!isStart && (
        <TimerInput handleStart={handleStart} handleInput={handleInput} />
      )}
      {isStart && (
        <ShowTimer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          handlePause={handlePause}
          isPaused={isPaused}
          handleResume={handleResume}
          handleReset={handleReset}
        />
      )}
    </div>
  );
};

export default MainCountdown;
