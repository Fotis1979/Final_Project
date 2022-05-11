import React from "react";
import MyContext from "../../../context/MyContext";
import Counter from "./Counter";
import QuestionCounter from "./QuestionCounter";
import QuestionTimer from "./QuestionTimer";
import Timer from "./Timer";
import { useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
import arrayRandomize from "../../../hooks/arrayRandomize";

import Rewards from "../rewards/Rewards";
import Nav2 from "../../pages/Nav2";

import Nav from "../../pages/Nav";
const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    // answers,
    // setAnswers,

    loading,
    cat,
    setCat,
    seconds,
    setSeconds,
    error,
    setAnswers,
    setError,
    number,
    setNumber,
    eror,
    diff,
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

  // console.log(questionArray);
  // console.log(wrongAnswers);
  // console.log(rightAnswer);

  useEffect(() => {
    console.log(rightAnswer[indexCounter]);
  }, [indexCounter]);

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

  const nextHandler = () => {
    // console.log("first");

    if (selected) {
      setSelected();
    } else setError("Please select an option first");
    setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
  };

  //setting localstorage:

  // useEffect(() => {
  //   localStorage.setItem(
  //     "question",
  //     JSON.stringify(questionArray[indexCounter])
  //   );
  //   // localStorage.setItem("index", JSON.stringify(indexCounter));
  // }, [questionArray, indexCounter]);

  // useEffect(() => {
  //   if (email === localStorage.getItem("email")) {
  //     setQuestionArray(localStorage.getItem("question"));
  //     setIndexCounter(localStorage.getItem("index"));
  //   }
  // }, [email]);

  const answers = [];

  answers.push(rightAnswer[indexCounter]);
  wrongAnswers[indexCounter].map((el) => answers.push(el));

  //   setRandomAnswers(arrayRandomize(answers));
  // }, [indexCounter]);

  // console.log(answers);
  // console.log("answers are :", answers);
  // console.log(randomAnswers);
  // console.log(results[indexCounter].correctAnswer);
  // console.log(results[indexCounter].category);
  const pop = (e) => {
    e.pop();
    setHints((prev) => prev - 1);
  };

  const x = (e) => {
    setCat(e.target.value);
  };

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <div>
      <Nav2 />
      <Rewards />

      <div className="App">
        <header className="App-header">
          <div className="quest-sec">
            Q{indexCounter + 1} . {questionArray[indexCounter]}
          </div>
          <div className="ans-sec">
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
          {!selected &&
            (hints === 1 || hints >= 2) &&
            wrongAnswers[indexCounter].length >= 2 && (
              <button
                className="Counter"
                onClick={() => pop(wrongAnswers[indexCounter])}
              >
                {hints >= 2
                  ? "DoubleClick for 50/50 CHANCE"
                  : hints === 1 && "useHint"}
              </button>
            )}

          {/* <QuestionTimer /> */}
          <button className="play-btn" onClick={nextHandler}>
            next
          </button>
        </header>
      </div>

      {/* // !**********!***************!******!********! */}
      {/* <label >Change Category</label> */}
      {(score % 100 === 0 || score % 100 === 10) &&
      score !== 0 &&
      score !== 10 ? (
        <select onChange={(e) => x(e)}>
          <option onChange={(e) => x(e)} value="Music">
            Music
          </option>
          <option onChange={(e) => x(e)} value="Society">
            Society & Culture{" "}
          </option>
          <option onChange={(e) => x(e)} value="Sport">
            Sport & Leisure{" "}
          </option>
        </select>
      ) : (
        setCat(cat)
      )}

      {/* !**********!***************!******!********! */}
      <QuestionCounter />
      {/* <QuestionTimer /> */}
      {/* <Timer />
      <Counter /> */}
      {/* { questions && <p>{questions}</p> } */}
    </div>
  );
};

export default QuestionBody;
