import React from "react";

import Answers from "./Answers";
import Counter from "./Counter";
import QuestionCounter from "./QuestionCounter";
import QuestionTimer from "./QuestionTimer";
import Timer from "./Timer";
const QuestionBody = () => {
  return (
    <main>
      <Answers />
      <QuestionCounter />
      <QuestionTimer />
      <Timer />
      <Counter />
    </main>
  );
};

export default QuestionBody;
