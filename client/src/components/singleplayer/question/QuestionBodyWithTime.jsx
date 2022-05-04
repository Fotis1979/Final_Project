import React from "react";
import MyContext from "../../../context/MyContext";
import Counter from "./Counter";
import QuestionCounter from "./QuestionCounter";
import QuestionTimer from "./QuestionTimer";
import Timer from "./Timer";
import { useContext } from "react";

const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
   allAnswers, questions, incorrect, correctAnswer, setCorrectAnswer
  } = context;   
  allAnswers && console.log(allAnswers)
  questions && console.log(questions);
  return (
    <main>
      <QuestionCounter />
      {/* <QuestionTimer /> */}
      <Timer />
      <Counter />
{/* { questions && <p>{questions}</p> } */}
    </main>
  );
};

export default QuestionBody;
