import { useState, useEffect } from "react";
import "./FaqItem.css";
const FaqItem = ({ faq, index }) => {
  //states
  const [isShow, setIsShow] = useState(false);

  //handle click function
  const handleClick = () => {
    setIsShow((isShow) => !isShow);
  };

  //to always open 1st que at start
  useEffect(() => {
    if (index === 0) {
      setIsShow(true);
    }
  }, []);

  return (
    <div className="faq-container">
      <div className="faq-block" onClick={handleClick}>
        <button className={isShow ? "arrow" : ""}>></button>
        <div className="que">{faq.question} </div>
      </div>
      <div className="answer">{isShow && faq.answer}</div>
    </div>
  );
};

export default FaqItem;

// import { useEffect, useState } from "react";
// import "./FaqItem.css";
// const FaqItem = ({ faq, index }) => {
//   const [isShow, setIsShow] = useState(false);
//   const handelClick = () => {
//     setIsShow((isShow) => !isShow);
//   };

//   useEffect(() => {
//     if (index === 0) {
//       setIsShow(true);
//     }
//   }, []);

//   return (
//     <div className="que-container">
//       <div className="que" onClick={handelClick}>
//         <button className={isShow ? "arrow" : ""}>></button>
//         <div className="quecont">{faq.question} </div>
//       </div>
//       <div className="answer">{isShow && faq.answer}</div>
//     </div>
//   );
// };

// export default FaqItem;
