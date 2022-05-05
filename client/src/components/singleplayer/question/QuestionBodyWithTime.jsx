import React from "react";
import MyContext from "../../../context/MyContext";
import Counter from "./Counter";
import QuestionCounter from "./QuestionCounter";
import QuestionTimer from "./QuestionTimer";
import Timer from "./Timer";
import { useContext, useState, useEffect } from "react";
import arrayRandomize from '../../../hooks/arrayRandomize'
import '../../../styling/questionBodyWithTime.css'


const QuestionBody = () => {

  const [indexCounter, setIndexCounter] = useState(0);

  const context = useContext(MyContext);
  const {
    allAnswers, questions, question,
    setQuestion, setQuestions, incorrect, correctAnswer, setCorrectAnswer, newQ, questionArr, setQuestionArr, color, setNewQ,setColor
  } = context;

  

  allAnswers && console.log(allAnswers)


  const questionArray = questions.map((item) => item.question)
  const wrongAnswers = questions.map((item) => item.incorrectAnswers);
  const rightAnswer = questions.map((item) => item.correctAnswer);

  // console.log(questionArray);
  // console.log(wrongAnswers);
  // console.log(rightAnswer);



  const nextHandler = () => {
    // console.log("first");
setColor("")
    setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
    
  };
  console.log(rightAnswer[indexCounter]);
  // console.log(indexCounter);


  const answers = [];
  answers.push(rightAnswer[indexCounter]);
  wrongAnswers[indexCounter].map((el) => answers.push(el));
  
    arrayRandomize(answers);


  console.log("answers are :", answers);
  console.log(rightAnswer);


  questions && console.log(questions[indexCounter].correctAnswer);



  const testHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === rightAnswer[indexCounter]) {
      console.log("correct");
      setColor("green")
      // e.target.style.backgroundColor = "green";
    } else {
      // e.target.style.backgroundColor = "red";
      setColor("red")

      console.log("wrong");
    }
  };
  console.log(questions[indexCounter].category);

  return (
    <main>
      <div className="App">
        <header className="App-header">
          <div className="quest-sec">
            Q{indexCounter + 1} . {questionArray[indexCounter]}
          </div>
          <div className="ans-sec">
            {answers.map((el, index) => (
              <div className="align-items">
                <button
                  value={el}
                  onClick={(e) => testHandler(e)}
                  className="answers-btn"
                  style={{ backgroundColor: `${color}` }}
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
      <Timer />
      <Counter />
      {/* { questions && <p>{questions}</p> } */}

      {questions && <p className="questions">{questions.question} </p>}

    </main>

  );
};

export default QuestionBody;
