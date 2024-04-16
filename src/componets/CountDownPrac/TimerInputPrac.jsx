const TimerInputPrac = (props) => {
  const { handleStart, handleInput } = props;

  return (
    <div className="container">
      <div className="input-div">
        <input
          type="text"
          placeholder="HH"
          id="hours"
          className="input-field"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="MM"
          id="minutes"
          className="input-field"
          onChange={handleInput}
        />
        <input
          type="text"
          placeholder="SS"
          id="seconds"
          className="input-field"
          onChange={handleInput}
        />
      </div>
      <div className="start-button">
        <button className="btn-start" onClick={handleStart}>
          Start
        </button>
      </div>
    </div>
  );
};

export default TimerInputPrac;
