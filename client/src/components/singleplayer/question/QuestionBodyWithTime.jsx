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
  const [questionArray, setQuestionArray] = useState(true);

  const context = useContext(MyContext);
  const {
    allAnswers, questions, question,
    setQuestion, setQuestions, incorrect, correctAnswer, setCorrectAnswer, newQ, questionArr, setQuestionArr, color, setNewQ, lock, setLock, setColor
  } = context;



  allAnswers && console.log(allAnswers)
useEffect(()=> {

     setQuestionArray(questions.map((item) => item.question))

},[questions])

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


  const answers =wrongAnswers[indexCounter]
  answers.length <=3 && answers.push(rightAnswer[indexCounter])

 
  useEffect(() => {

    answers.sort(() => 0.5 - Math.random())
},[indexCounter])

 

 

 

  // answers && console.log(answers[indexCounter]);questions

  const LockButtons = () => {
    color ? setLock(true) : setLock(false);
  };
  useEffect(() => {
    LockButtons();
  }, [color]);


  // console.log("answers are :", answers);


  // questions && console.log(questions[indexCounter].correctAnswer[indexCounter]);



  const testHandler = (e) => {
    console.log(e.target.value);
    if (e.target.value === rightAnswer[indexCounter] && e.target.value === e.target.name) {
      console.log("correct");
      setColor("green")
         } else {
      e.target.value !== rightAnswer[indexCounter] &&
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
                  name={el}
                  value={el}
                  onClick={lock === false ? (e) => testHandler(e) : undefined && (console.log("el"))}
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
