import { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
import Timer from './components/Timer';
import QuestionTimer from './components/QuestionTimer'


const App = () => {

  console.log("rendered");
  
  const [questions, setQuestions] = useState()
  const [message, setMessage] = useState()
  const [color, setColor] = useState()
  const [wrightAnswer, setWrightAnswer] = useState()
  const [score, setScore] = useState(0)


  // *** FUNCTION to render new question on every click. ***

  const AnswerSubmit = (e) => {

    // *** SET TIMEOUT to wait four seconds until the next fetch. ***

    setTimeout(NewQ, 4000)

    //  *** FUNCTION to fetch fifty api question objects and choose one of them randomly. ***

    function NewQ() {

      fetch("https://the-trivia-api.com/api/questions?limit=50")
        .then(res => res.json())
        .then(data => setQuestions((data[Math.floor(Math.random() * 50)])))

      setMessage("")
      setColor("")
      setWrightAnswer("")
    }

    if (e.target.value === questions.correctAnswer) {

       setMessage("WRIGHT ANSWER !!!")
      setWrightAnswer("")
      setColor("green")
    } else {

    setMessage("WRONG ANSWER !!!")
      setColor("tomato")
      e.target.value !== questions.correctAnswer && setWrightAnswer(questions.correctAnswer)
    }
  }

  // *** FUNCTION to shuffle the items of the array in a random order. ***

  function RandomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }


  // *** CONSOLE.LOGS for testing ***
  // questions && console.log(questions.incorrectAnswers.indexOf(questions.correctAnswer));
  // questions && console.log(questions.correctAnswer);
  // questions && console.log(questions.incorrectAnswers);
  // ***************


  // *** PUSH the Correct answer to the incorrect answers array. ***

  questions && questions.incorrectAnswers.length <= 3 && questions.incorrectAnswers.push(questions.correctAnswer)
  questions && RandomArrayShuffle(questions.incorrectAnswers)


  // *** CONSOLE.LOGS for testing ***
  // questions && console.log(questions.incorrectAnswers.indexOf(questions.correctAnswer));
  // questions && console.log(questions.correctAnswer);
  // questions && console.log(questions.incorrectAnswers);
  // ***************

  return (

    <main>

      {questions && <Counter questions={questions} score={score} setScore={setScore} color={color} />}

      {questions && <QuestionTimer setQuestions={setQuestions} setWrightAnswer={setWrightAnswer} setColor={setColor} setMessage={setMessage} message={message} />}
      {questions && <Timer score={score} setScore={setScore} setQuestions={setQuestions} setMessage={setMessage} />}

      <br /><br />

      <div className="canvas">

        <h1>Questions Quiz</h1>

        <br /><br />
        {questions && <h2> CATEGORY:{" " + questions.category}</h2>}

        <br /><br />

        {questions && <div className="question"> {questions.question}</div>}

        <br /> <br />

        {<aside className="questions-section">

          {questions &&
            <button style={{ backgroundColor: `${color}` }} id={questions.id} value={questions.incorrectAnswers[0]} onClick={(e) => AnswerSubmit(e)}>{questions.incorrectAnswers[0]}</button>
          }

          {questions &&
            <button style={{ backgroundColor: `${color}` }} id={questions.id} value={questions.incorrectAnswers[1]} onClick={(e) => AnswerSubmit(e)}> {questions.incorrectAnswers[1]}</button>
          }

          {questions &&
            <button style={{ backgroundColor: `${color}` }} id={questions.id} value={questions.incorrectAnswers[2]} onClick={(e) => AnswerSubmit(e)}> {questions.incorrectAnswers[2]}</button>
          }

          {questions &&
            <button style={{ backgroundColor: `${color}` }} id={questions.id} value={questions.incorrectAnswers[3]} onClick={(e) => AnswerSubmit(e)}> {questions.incorrectAnswers[3]}</button>
          }
          {!questions && <button onClick={AnswerSubmit}>
            START QUIZ</button>}

          <br /><br />

          {message &&
            <div className="w">
              <p style={{ color: `${color}` }}>{message} </p>
            </div>}

          {wrightAnswer &&
            <p className="answer-display">{wrightAnswer !== "" && questions && "Wright Answer : " + wrightAnswer}</p>}

        </aside>
        }
      </div>
    </main>
  );
}

export default App;




