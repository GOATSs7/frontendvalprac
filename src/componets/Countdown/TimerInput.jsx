// TimerInput.js
const TimerInput = (props) => {
  const { handleStart, handleInput } = props;

  return (
    <div className="input-container">
      <div className="input-box">
        <input type="text" placeholder="HH" onChange={handleInput} id="hours" />
        <input
          type="text"
          placeholder="MM"
          onChange={handleInput}
          id="minutes"
        />
        <input
          type="text"
          placeholder="SS"
          onChange={handleInput}
          id="seconds"
        />
      </div>

      <button onClick={handleStart} className="timer-button start-button">
        Start
      </button>
    </div>
  );
};

export default TimerInput;
