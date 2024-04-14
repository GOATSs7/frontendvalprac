const ShowTimer = (props) => {
  const {
    hours,
    seconds,
    minutes,
    isPaused,
    handlePause,
    handleResume,
    handleReset,
  } = props;

  return (
    <div className="container">
      <div className="timer-box">
        <div>{hours < 10 ? `0${hours}` : hours}</div>
        <span>:</span>
        <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
        <span>:</span>
        <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
      </div>

      <div className="action-box">
        {!isPaused && (
          <button onClick={handlePause} className="pause-button timer-button">
            Pause
          </button>
        )}
        {isPaused && (
          <button onClick={handleResume} className="resume-button timer-button">
            Resume
          </button>
        )}
        <button onClick={handleReset} className="reset-button timer-button">
          Reset
        </button>
      </div>
    </div>
  );
};

export default ShowTimer;
