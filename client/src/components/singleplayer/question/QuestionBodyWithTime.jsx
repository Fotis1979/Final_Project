import React from "react";
import MyContext from "../../../context/MyContext";
import Counter from "./Counter";
import QuestionCounter from "./QuestionCounter";
import QuestionTimer from "./QuestionTimer";
import Timer from "./Timer";
import { useContext, useState, useEffect } from "react";
import arrayRandomize from "../../../hooks/arrayRandomize";
import "../../../styling/questionBodyWithTime.css";
import Rewards from "../rewards/Rewards";
import Nav from "../../pages/Nav";
const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    loading,
    eror,
    results,
    number,
    allAnswers,
    questions,
    lock,
    setLock,
    randomAnswers,
    setRandomAnswers,
    score,
    setScore,
  } = context;

  const [error, setError] = useState(false);
  const [selected, setSelected] = useState();
  const [indexCounter, setIndexCounter] = useState(0);

  const questionArray = results.map((item) => item.question);
  const wrongAnswers = results.map((item) => item.incorrectAnswers);
  const rightAnswer = results.map((item) => item.correctAnswer);

  console.log(questionArray);
  // console.log(wrongAnswers);
  // console.log(rightAnswer);

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
    if (indexCounter <= number) {
      setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
    } else {
      setIndexCounter(number);
      console.log("no more questions");
    }
  };
  console.log(rightAnswer[indexCounter]);
  console.log(indexCounter);

  const answers = [];
  answers.push(rightAnswer[indexCounter]);

  wrongAnswers[indexCounter].map((el) => answers.push(el));

  useEffect(() => {
    setRandomAnswers(arrayRandomize(answers));
  }, [indexCounter]);

  //   useEffect(() => {

  //     answers.sort(() => 0.5 - Math.random())
  // },[indexCounter])

  console.log(answers);
  console.log("answers are :", answers);
  console.log(randomAnswers);
  console.log(rightAnswer);

  console.log(results[indexCounter].correctAnswer);

  console.log(results[indexCounter].category);

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;
  // if (results === undefined) return <p>no more questions</p>;
  return (
    <div>
      <Nav />
      <Rewards />
      <div className="App">
        <header className="App-header">
          <div className="quest-sec">
            Q{indexCounter + 1} . {questionArray[indexCounter]}
          </div>
          <div className="ans-sec">
            {randomAnswers.map((el, index) => (
              <div className="align-items">
                <button
                  value={el}
                  className={`singleOption  ${selected && handleSelect(el)}`}
                  key={el}
                  onClick={() => handleCheck(el)}
                  disabled={selected}
                  //onClick={(e) => testHandler(e)}
                  // className="answers-btn"
                  //  style={{ backgroundColor: `${color}` }}
                >
                  {index + 1 + "." + el}
                </button>
                {/* <button
                  value={el}
                  onClick={lock === false ? (e) => testHandler(e) : undefined}
                  className="answers-btn"
                  style={{ backgroundColor: `${color}` }}
                ></button> */}
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
