import { useState, useEffect } from "react";
import ShowTimer from "./ShowTimer";
import TimerInputPrac from "./TimerInputPrac";

const MainCount = () => {
  //states
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStart, setIsstart] = useState(false);
  const [isPaused, setIspaused] = useState(false);
  const [timerId, setTimerId] = useState(0);
  //handel input for handleing the hh mm and ss input from user

  const handleInput = (e) => {
    console.log(e.target.id, e.target.value);
    let id = e.target.id;
    let value = parseInt(e.target.value);
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  //handle start function to start the timer
  const handleStart = () => {
    if (
      hours < 0 ||
      minutes < 0 ||
      seconds < 0 ||
      (hours === 0 && minutes === 0 && seconds === 0)
    ) {
      alert("Invalid Input");
    } else {
      setIsstart(true);
    }
  };
  //handle pause
  const handlePause = () => {
    setIspaused(true);
    clearInterval(timerId);
  };
  //handle resume
  const handleResume = () => {
    setIspaused(false);
    timerFunction(seconds, minutes, hours);
  };
  //handle reset
  const handleReset = () => {
    setIsstart(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  };

  // runtimer function for actual time runnig
  const timerFunction = (sec, min, hr, tId) => {
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
      handleReset();
      alert("Timer is completed");
      clearInterval(tId);
    }
  };
  //useEffect for function calling

  useEffect(() => {
    let tId;
    if (isStart) {
      tId = setInterval(() => {
        timerFunction(seconds, minutes, hours, tId);
      }, 1000);
      setTimerId(tId);
    }

    return () => {
      clearInterval(tId);
    };
  }, [isStart, hours, minutes, seconds]);

  return (
    <div>
      <h1>Count Down</h1>

      {!isStart && (
        <TimerInputPrac handleStart={handleStart} handleInput={handleInput} />
      )}
      {isStart && (
        <ShowTimer
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          handlePause={handlePause}
          handleResume={handleResume}
          handleReset={handleReset}
          isPaused={isPaused}
        />
      )}
    </div>
  );
};

export default MainCount;
