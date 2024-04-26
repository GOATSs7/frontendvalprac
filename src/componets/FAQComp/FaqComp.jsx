import FaqItem from "./FaqItem";

const FaqComp = () => {
  const items = [
    {
      question: "What is the capital of Australia?",
      answer: "Canberra",
    },
    {
      question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
      answer: "Harper Lee",
    },
    {
      question: "What is the chemical symbol for water?",
      answer: "H2O",
    },
    {
      question: "Who painted the Mona Lisa?",
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the tallest mountain in the world?",
      answer: "Mount Everest",
    },
    {
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      question: "Who invented the telephone?",
      answer: "Alexander Graham Bell",
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
    {
      question: "Who wrote the play 'Hamlet'?",
      answer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      answer: "Au",
    },
  ];

  return (
    <div className="faq">
      {items.map((faq, index) => {
        return <FaqItem faq={faq} index={index} />;
      })}
    </div>
  );
};

export default FaqComp;

// import FaqItem from "./FaqItem";

// const FaqComp = () => {
//   const items = [
//     {
//       question: "What is the capital of Australia?",
//       answer: "Canberra",
//     },
//     {
//       question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
//       answer: "Harper Lee",
//     },
//     {
//       question: "What is the chemical symbol for water?",
//       answer: "H2O",
//     },
//     {
//       question: "Who painted the Mona Lisa?",
//       answer: "Leonardo da Vinci",
//     },
//     {
//       question: "What is the tallest mountain in the world?",
//       answer: "Mount Everest",
//     },
//     {
//       question: "What is the capital of France?",
//       answer: "Paris",
//     },
//     {
//       question: "Who invented the telephone?",
//       answer: "Alexander Graham Bell",
//     },
//     {
//       question: "What is the largest planet in our solar system?",
//       answer: "Jupiter",
//     },
//     {
//       question: "Who wrote the play 'Hamlet'?",
//       answer: "William Shakespeare",
//     },
//     {
//       question: "What is the chemical symbol for gold?",
//       answer: "Au",
//     },
//   ];

//   return (
//     <div className="faq-container">
//       <h1 className="faq">FAQ's</h1>

//       {items.map((faq, index) => {
//         return <FaqItem faq={faq} index={index} />;
//       })}
//     </div>
//   );
// };

// export default FaqComp;
