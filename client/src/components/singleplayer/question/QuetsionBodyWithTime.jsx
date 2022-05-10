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
import Nav2 from "../../pages/Nav2";

import Nav from "../../pages/Nav";
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
    setWrongAnswers
  } = context;

  const [error, setError] = useState(false);
  const [selected, setSelected] = useState();
  const [indexCounter, setIndexCounter] = useState(0);


  // console.log(questionArray);
  // console.log(wrongAnswers);
  // console.log(rightAnswer);

  const nav = useNavigate();

  indexCounter === (number -1)+1 && nav("/game_over") 
  
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

  const answers = [];
  answers.push(rightAnswer[indexCounter]);

  wrongAnswers[indexCounter].map((el) => answers.push(el))


console.log(answers);

  useEffect(() => {  

    setRandomAnswers(arrayRandomize(answers));
  }, [indexCounter]);


  useEffect(() => {

    seconds === 15 && setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);

  }, [seconds])


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
    <div>
      <Nav2 />
      <Rewards />

 
      <div className="App">
        <header className="App-header">
          <div className="quest-sec">
            Q{indexCounter + 1} . {questionArray[indexCounter]}
          </div>
          <div className="ans-sec">
            {randomAnswers.map((el, index) => (
              <div key={index} className="align-items">
                <button
                  value={el}
                  className={`singleOption  ${selected && handleSelect(el)}`}
                  key={el}
                  onClick={() => handleCheck(el) }
                  disabled={selected}
                >
                  {index + 1 + "." + el}
                </button>
              </div>
            ))}
          </div>
          {(hints === 1 || hints === 2) && (
        <button
          className="Counter"
          onClick={() =>
          randomAnswers.pop() &&
            setHints((prev) => prev - 1)
         
          } 
        >   
{         console.log(randomAnswers)
}          {hints === 2 ? "DoubleClick for 50/50 CHANCE" : "useHint"}
        </button>
      )}
      
          <QuestionTimer />
          <button onClick={nextHandler}>next</button>
        </header>
      </div>


 {/* // !**********!***************!******!********! */}

  {/* <label>Categories</label>
        {
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

        } */}

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
