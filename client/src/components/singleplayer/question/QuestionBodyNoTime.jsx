import React from "react";
import MyContext from "../../../context/MyContext";
import Counter from "./Counter";
import QuestionCounter from "./QuestionCounter";
import QuestionTimer from "./QuestionTimer";
import Timer from "./Timer";
import { useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
import arrayRandomize from "../../../hooks/arrayRandomize";
import "../../../styling/questionBodyWithTime.css";
import Rewards from "../rewards/Rewards";

import Nav from "../../pages/Nav";
const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    answers,
    setAnswers,
    loading,
    error,
    setError,
    number,
    setNumber,
    eror,
    hints,
    setHints,
    results,
    questionArray,
    wrongAnswers,
    rightAnswer,
    setQuestionArray,
    randomAnswers,
    setRandomAnswers,
    score,
    setScore,
  } = context;

  const [selected, setSelected] = useState();
  const [indexCounter, setIndexCounter] = useState(0);

  console.log("indexCounter", indexCounter);

  // const questionArray = results.map((item) => item.question);
  // const wrongAnswers = results.map((item) => item.incorrectAnswers);
  // const rightAnswer = results.map((item) => item.correctAnswer);

  console.log(questionArray);
  console.log(wrongAnswers);
  console.log(rightAnswer);

  const nav = useNavigate();

  indexCounter === number - 1 && nav("/");

  const handleSelect = (i) => {
    if (selected === i && selected === rightAnswer[indexCounter])
      return "select";
    else if (selected === i && selected !== rightAnswer[indexCounter])
      return "wrong";
    else if (i === rightAnswer[indexCounter]) return "select";
  };
  const handleCheck = (i) => {
    setSelected(i);
    if (i === rightAnswer[indexCounter]) setScore(score + 10);
    setError(false);
  };

  const nextHandler = () => {
    // console.log("first");
    if (selected) {
      setSelected();
    } else setError("Please select an option first");
    setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
  };
  useEffect(() => {
    //results.map((item) => setQuestionArray(item.question));
    const combinedAnswers = (right, wrong) => [right, ...wrong];
    setAnswers(
      combinedAnswers(rightAnswer[indexCounter], wrongAnswers[indexCounter])
    );
  }, [indexCounter]);

  console.log(answers);

  // const answers = [];

  // answers.push(rightAnswer[indexCounter]);

  // wrongAnswers[indexCounter].map((el) => answers.push(el));

  useEffect(() => {
    //results.map((item) => setQuestionArray(item.question));

    setRandomAnswers(arrayRandomize(answers));
  }, [indexCounter]);

  // console.log(answers);
  // console.log("answers are :", answers);
  // console.log(randomAnswers);
  // console.log(results[indexCounter].correctAnswer);
  // console.log(results[indexCounter].category);

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <div>
      <Nav />
      <Rewards />

      {(hints === 1 || hints === 2) && (
        <button
          className="Counter"
          onClick={() =>
            wrongAnswers[indexCounter + 1].length > 1 &&
            wrongAnswers[indexCounter + 1].pop() &&
            setHints((prev) => prev - 1)
          }
        >
          {hints === 2 ? "DoubleClick for 50/50 CHANCHE" : "useHint"}
        </button>
      )}

      <div className="App">
        <header className="App-header">
          <div className="quest-sec">
            Q{indexCounter + 1} . {questionArray[indexCounter]}
          </div>
          <div className="ans-sec">
            {answers.map((el, index) => (
              <div key={index} className="align-items">
                <button
                  value={el}
                  className={`singleOption  ${selected && handleSelect(el)}`}
                  key={el}
                  onClick={() => handleCheck(el)}
                  disabled={selected}
                >
                  {index + 1 + "." + el}
                </button>
              </div>
            ))}
          </div>

          <button onClick={nextHandler}>next</button>
        </header>
      </div>

      <QuestionCounter />
      {/* <QuestionTimer /> */}
      {/* <Timer />
      <Counter /> */}
      {/* { questions && <p>{questions}</p> } */}
    </div>
  );
};

export default QuestionBody;
