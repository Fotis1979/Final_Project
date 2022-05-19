import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MyContext from "../../../context/MyContext";

import Counter from "./Counter";
import Timer from "./Timer";
import QuestionCounter from "./QuestionCounter";
import QuestionTimer from "./QuestionTimer";

import Nav from "../../pages/Nav";
import Nav2 from "../../pages/Nav2";
import Rewards from "../rewards/Rewards";

import arrayRandomize from "../../../hooks/arrayRandomize";
import "../../../styling/questions.css";

const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    loading,
    highScoreResult,
    setHighScoreResult,
    highScore,
    number,
    setNumber,
    eror,
    hints,
    setHints,
    results,
    email,
    wrongAnswers,
    rightAnswer,
    questionArray,
    randomAnswers,
    setRandomAnswers,
    score,
    setScore,
  } = context;

  const [error, setError] = useState(false);
  const [selected, setSelected] = useState();
  const [indexCounter, setIndexCounter] = useState(0);

  // console.log(questionArray);
  // console.log(wrongAnswers);
  // console.log(rightAnswer);

  const nav = useNavigate();

  indexCounter === number - 1 + 1 && nav("/game_over");

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
  console.log(score);
  const nextHandler = () => {
    // console.log("first");
    if (selected) {
      setSelected();
    } else setError("Please select an option first");
    setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
  };

  const answers = [];
  answers.push(rightAnswer[indexCounter]);

  wrongAnswers[indexCounter].map((el) => answers.push(el));

  //   useEffect(() => {
  //     setRandomAnswers(arrayRandomize(answers));
  //   }, [indexCounter]);

  // console.log(answers);
  // console.log("answers are :", answers);
  // console.log(randomAnswers);
  // console.log(results[indexCounter].correctAnswer);
  // console.log(results[indexCounter].category);

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <>
      <Nav />
      <Rewards />

      {(hints === 1 || hints === 2) && (
        <button
          className="rewards--btn"
          onClick={() =>
            wrongAnswers[indexCounter + 1].length > 1 &&
            wrongAnswers[indexCounter + 1].pop() &&
            setHints((prev) => prev - 1)
          }
        >
          {hints === 2 ? "DoubleClick for 50/50 CHANCHE" : "useHint"}
        </button>
      )}
      <div className="qa--section">
        <div className="questions--section">
          Q{indexCounter + 1} . {questionArray[indexCounter]}
        </div>
        <div className="answers--section">
          {answers.sort().map((el, index) => (
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

        <button className="next--btn" onClick={nextHandler}>
          next
        </button>
      </div>

      <QuestionCounter />
      {/* <QuestionTimer /> */}
      {/* <Timer />
      <Counter /> */}
      {/* { questions && <p>{questions}</p> } */}
    </>
  );
};

export default QuestionBody;
