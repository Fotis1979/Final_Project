import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import MyContext from "../../../context/MyContext";

import arrayRandomize from "../../../hooks/arrayRandomize";

import Counter from "./Counter";
import Timer from "./Timer";
import QuestionCounter from "./QuestionCounter";
import QuestionTimer from "./QuestionTimer";
import Rewards from "../rewards/Rewards";

import Nav from "../../pages/Nav";
import Nav2 from "../../pages/Nav2";

import "../../../styling/questions.css";
import Popup from "../../Popup/Popup";
import ErrorMessage from "../../errorMessage/ErrorMessage";
//import '../../../styling/questionBodyWithTime.css';

const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    loading,
    number,
    setNumber,
    eror,
    hints,
    setHints,
    results,
    email,
    seconds,
    setSeconds,
    wrongAnswers,
    rightAnswer,
    questionArray,
    randomAnswers,
    setRandomAnswers,
    cat,
    setCat,
    score,
    setScore,
    setWrongAnswers,
    answerPopup,
    setAnswerPopup,
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
    setAnswerPopup(true);
    if (i === rightAnswer[indexCounter]) setScore(score + 10);
    setError(false);
  };

  const nextHandler = () => {
    // console.log("first");
    if (selected) {
      setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
      setSelected();
    } else setError(true);
  };

  const answers = [];
  answers.push(rightAnswer[indexCounter]);

  wrongAnswers[indexCounter].map((el) => answers.push(el));

  console.log(answers);

  useEffect(() => {
    setRandomAnswers(arrayRandomize(answers));
  }, [indexCounter]);

  useEffect(() => {
    seconds === 15 &&
      setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
  }, [seconds]);

  // !**********!***************!******!********!
  // const x = (e) => {
  //   setCat(e.target.value);
  // };
  // !**********!***************!******!********!

  // console.log(answers);
  // console.log("answers are :", answers);
  // console.log(randomAnswers);
  console.log(results[indexCounter].correctAnswer);
  // console.log(results[indexCounter].category);

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <>
      <Nav />
      <Rewards />

      {error && <ErrorMessage>Please select an option first</ErrorMessage>}
      <div className="qa--section">
        <div className="questions--section">
          Q{indexCounter + 1} . {questionArray[indexCounter]}
        </div>
        <div className="answers--section">
          {randomAnswers.map((el, index) => (
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
        {(hints === 1 || hints === 2) && (
          <button
            className="rewards--btn"
            onClick={() => randomAnswers.pop() && setHints((prev) => prev - 1)}
          >
            {console.log(randomAnswers)}{" "}
            {hints === 2 ? "DoubleClick for 50/50 CHANCE" : "useHint"}
          </button>
        )}
        <button className="next--btn" onClick={nextHandler}>
          next
        </button>
        {selected === rightAnswer[indexCounter] && (
          <Popup trigger={answerPopup} setTrigger={setAnswerPopup}>
            <p>Correct answer</p>
          </Popup>
        )}
        {selected !== rightAnswer[indexCounter] && (
          <Popup trigger={answerPopup} setTrigger={setAnswerPopup}>
            <p>wrong answer</p>
          </Popup>
        )}
        <QuestionTimer />
        <QuestionCounter />
        {/*<Counter />*/}
      </div>
    </>
  );
};

export default QuestionBody;
