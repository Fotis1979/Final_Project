import { useEffect, useState } from 'react';
import './App.css';
import Counter from './components/Counter'
import Timer from './components/Timer';
import QuestionTimer from './components/QuestionTimer'
import QuestionCounter from './components/QuestionCounter';
import x from './assets/images/x.png'
import q from './assets/images/q.jpg'






const App = () => {

  // console.log("rendered");

  const [questions, setQuestions] = useState()
  const [message, setMessage] = useState()
  const [color, setColor] = useState()
  const [wrightAnswer, setWrightAnswer] = useState()
  const [score, setScore] = useState(0)
  const [newQuestion, setNewQuestion] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [g, setG] = useState(false)



   

  // *** FUNCTION to render new question on every click. ***

  const AnswerSubmit = (e) => {
    e.preventDefault()


       


    // *** SET TIMEOUT to wait four seconds until the next fetch. ***

    setTimeout(NewQ, 4000)

    //  *** FUNCTION to fetch fifty api question objects and choose one of them randomly. ***

    function NewQ() {
      // console.log("fetched");
!color &&
      fetch("https://the-trivia-api.com/api/questions?limit=50&difficulty=hard")
        .then(res => res.json())
        .then(data => setQuestions((data[Math.floor(Math.random()) * 50])))

      setMessage("")
      setColor("")
      setWrightAnswer("")
    }

    if (e.target.value === questions.correctAnswer) {

      setMessage("WRIGHT ANSWER !!!")
      setWrightAnswer("")
      setColor("green")

    }
    else {

      setMessage("WRONG ANSWER !!!")
      setColor("tomato")
      e.target.value !== questions.correctAnswer && setWrightAnswer(questions.correctAnswer)
    }
  }

    const LockButtons = () => {
        color ? setG(true) : setG(false)
      
    }
useEffect(() => {

   LockButtons()
},[color])
   
    console.log(g);


  // *** FUNCTION to shuffle the items of the array in a random order. ***
  function RandomArrayShuffle(array) {
    var currentIndex = questions.incorrectAnswers.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) { 
       
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = questions.incorrectAnswers[currentIndex];
      questions.incorrectAnswers[currentIndex] = questions.incorrectAnswers[randomIndex];
      questions.incorrectAnswers[randomIndex] = temporaryValue;    
     

    }
  return array
  }

  // *** CONSOLE.LOGS for testing ***
  // questions && console.log(questions.incorrectAnswers.indexOf(questions.correctAnswer));
  // questions && console.log(questions.incorrectAnswers);
  // ***************

  // *** PUSH the Correct answer to the incorrect answers array and shuffle the array running the shuffleArray function in the end. ***
 
  questions && questions.incorrectAnswers.length === 3 && questions.incorrectAnswers.push(questions.correctAnswer) && RandomArrayShuffle()

  
 
  // *** CONSOLE.LOGS for testing ***
  // questions && console.log(questions.incorrectAnswers.indexOf(questions.correctAnswer));
  // questions && console.log(questions.correctAnswer);
  // questions && console.log(questions.incorrectAnswers);
  // ***************
  
  return (

    <main>

      {questions && <QuestionCounter newQuestion={newQuestion} color={color} />}
      {questions && <Counter setColor={setColor} questions={questions} score={score} setScore={setScore} color={color} newQuestion={newQuestion} />}

      {questions && <QuestionTimer newQuestion={newQuestion} setNewQuestion={setNewQuestion} setQuestions={setQuestions} setWrightAnswer={setWrightAnswer} setColor={setColor} setMessage={setMessage} message={message} />}
      {questions && <Timer gameOver={gameOver} setGameOver={setGameOver} score={score} setScore={setScore} setQuestions={setQuestions} setMessage={setMessage} newQuestion={newQuestion} />}

      <br /><br />

      <div className="canvas">

        {questions && !gameOver && <h1>Questions Quiz</h1>}

        <br /><br />
        {questions && <h2> CATEGORY:{" " + questions.category}</h2>}

        <br /><br />

        {questions && <div className="question"> {questions.question}</div>}

        <br /> <br />

        {<aside className="questions-section">



          {questions &&
            <button style={{ backgroundColor: `${color}` }} id={questions.id} value={questions.incorrectAnswers[0]} onClick={(g === false ? (e) => AnswerSubmit(e) : undefined)}>{questions.incorrectAnswers[0]}</button>
          }


          {questions &&
            <button style={{ backgroundColor: `${color}` }} id={questions.id} value={questions.incorrectAnswers[1]} onClick={(g === false ? (e) => AnswerSubmit(e) : undefined)}> {questions.incorrectAnswers[1]}</button>
          }

          {questions &&
            <button style={{ backgroundColor: `${color}` }} id={questions.id} value={questions.incorrectAnswers[2]} onClick={(g === false ? (e) => AnswerSubmit(e) : undefined)}> {questions.incorrectAnswers[2]}</button>
          }

          {questions &&
            <button style={{ backgroundColor: `${color}` }} id={questions.id} value={questions.incorrectAnswers[3]} onClick={(g === false ? (e) => AnswerSubmit(e) : undefined)}> {questions.incorrectAnswers[3]}</button>
          }

          {!questions && <button onClick={ (e) =>  AnswerSubmit(e)}>
            {gameOver === false ? "START QUIZ" : "ClicK foR NEXT GAME"}</button>}

          <br /><br />

          {message && !gameOver &&
            <div className="w">
              <p style={{ color: `${color}` }}>{message} </p>
            </div>}

          {wrightAnswer &&
            <p className="answer-display">{wrightAnswer !== "" && questions && "Wright Answer : " + wrightAnswer}</p>}

        </aside>
        }  
        {gameOver && <img src={`${x}`}  alt="img"/>}
        {!questions && !gameOver && <img className="start" src={`${q}`} alt="img" />}
        </div>
    </main>
  );
}

export default App;




