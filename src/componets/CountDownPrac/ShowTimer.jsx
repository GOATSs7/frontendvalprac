const ShowTimer = (props) => {
  //props
  const {
    hours,
    minutes,
    seconds,
    handlePause,
    handleResume,
    handleReset,
    isPaused,
  } = props;

  return (
    <div className="timer-container">
      <div className="timer-box">
        <div className="timer-container">
          {hours < 10 ? `0${hours}` : hours}{" "}
        </div>
        <span>:</span>
        <div className="timer-container">
          {minutes < 10 ? `0${minutes}` : minutes}{" "}
        </div>
        <span>:</span>
        <div className="timer-container">
          {seconds < 10 ? `0${seconds}` : seconds}{" "}
        </div>
      </div>
      <div className="timer-buttons">
        {!isPaused && (
          <button className="btn-pause" onClick={handlePause}>
            Pause
          </button>
        )}
        {isPaused && (
          <button className="btn-resume" onClick={handleResume}>
            Resume
          </button>
        )}
        {
          <button className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        }
      </div>
    </div>
  );
};

export default ShowTimer;
