import { useState, useEffect } from "react";
import "./EmiComp.css";

const EmiComp = () => {
  //states
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [emi, setEmi] = useState(0);

  //function for store data in stat

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    let id = e.target.id;
    let value = parseInt(e.target.value);

    if (id === "principal") {
      setPrincipal(value);
    } else if (id === "interest") {
      setInterest(value);
    } else {
      setYear(value);
    }
  };

  //function for calculation
  const calculateEmi = () => {
    let r = interest;
    if (principal && r && year) {
      r = r / 12 / 100;
      const calPow = Math.pow(1 + r, year * 12);
      const amount = principal * ((r * calPow) / (calPow - 1));
      setEmi(amount.toFixed(2));
    }
  };
  useEffect(() => {
    calculateEmi();
  }, [principal, interest, year]);

  return (
    <div className="loan-calc">
      <h1>Mortgage Calculator</h1>
      <div className="inputs">
        <label htmlFor="principal">Principal</label>
        <input
          type="number"
          className="input"
          id="principal"
          onChange={handleChange}
        />
        <label htmlFor="interest">Interest</label>
        <input
          type="number"
          className="input"
          id="interest"
          onChange={handleChange}
        />
        <label htmlFor="year">Years</label>
        <input
          type="number"
          className="input"
          id="year"
          onChange={handleChange}
        />
      </div>
      <div className="output">Your Monthly EMI will be {emi} </div>
    </div>
  );
};

export default EmiComp;
