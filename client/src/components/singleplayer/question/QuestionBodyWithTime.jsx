import React from "react";
import MyContext from "../../../context/MyContext";
import QuestionTimer from "./QuestionTimer";
import { useNavigate } from "react-router";
import { useContext, useEffect } from "react";
import arrayRandomize from "../../../hooks/arrayRandomize";
import "../../../styling/questions.css";
import Nav from "../../pages/Nav";
import Correct from "../rewards/Correct";
import Counter from "./Counter";
import Hints from "../rewards/Hints";

const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    gameOver,
    setClicked,
    setStoredScore,
    loading,
    number,
    eror,
    streak,
    hints,
    setHints,
    diff,
    setStreak,
    setDiff,
    seconds,
    setSeconds,
    wrongAnswers,
    rightAnswer,
    questionArray,
    cat,
    setCat,
    firstCat,
    score,
    setScore,
    indexCounter,
    setIndexCounter,
    selected,
    setSelected,
    results,
    setGameOver,
    gameDiff,
    setError
  } = context;



  const nav = useNavigate();

  if (indexCounter === (number - 1) + 1) {
    console.log("last QUESTion");
    setGameOver(true);
    setStoredScore(score);
    nav("/game_over");
  }


  // storedScore && console.log(storedScore);

  const handleSelect = (i) => {
    setSeconds(0)
    setClicked(true)
    if (selected === i && selected === rightAnswer[indexCounter])
      return "select";
    else if (selected === i && selected !== rightAnswer[indexCounter])

      return "wrong"
    else if (i === rightAnswer[indexCounter]) return "select"

  };

  useEffect((i) => {
    (selected === wrongAnswers[indexCounter][0] || selected === wrongAnswers[indexCounter][1] || selected === wrongAnswers[indexCounter][2]) && setStreak(0)
  }, [selected])


  const handleCheck = (i) => {
    setSelected(i);

    if (i === rightAnswer[indexCounter] && diff === "easy") {
      setScore(score + 6);
      setError(false)
    }
    if (i === rightAnswer[indexCounter] && diff === "medium") {
      setScore(score + 9);
      setError(false)
    }
    if (i === rightAnswer[indexCounter] && diff === "hard") {
      setScore(score + 12);
      setError(false)
    }
    if (i !== rightAnswer[indexCounter] && diff === "hard" && score !== 0 && score >= 2) {
      setScore(score - 2)
      score < 2 && setScore(0)
      setError(false)
    }
    if (i !== rightAnswer[indexCounter] && diff === "medium" && score !== 0 && score >= 3) {
      setScore(score - 2);
      setError(false)
    }
    if (i !== rightAnswer[indexCounter] && diff === "easy" && score !== 0 && score >= 4) {
      setScore(score - 3);
      setError(false)
    }
  };

  const nextHandler = () => {
    // console.log("first");
    !selected && setClicked(false)
    if (selected) {
      setSelected();
    } else setError("Please select an option first");
    setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
    setSeconds(0)

  };

  const answers = [];
  answers.push(rightAnswer[indexCounter]);
  wrongAnswers[indexCounter].map((el) => answers.push(el))

  const categories = []
  categories.push("arts", "film", "food", "general", "geography", "history", "music", "science", "society", "sport")



  useEffect(() => {

    setCat(arrayRandomize(categories).slice(4))
  }, [])


  useEffect(() => {

    indexCounter === indexCounter + 1 &&
      setCat(categories[Math.floor(Math.random())])
    console.log(cat);
  }, [])


  useEffect(() => {

    console.log(rightAnswer[indexCounter]);
  }, [indexCounter])



  useEffect(() => {

    gameDiff === "easy" && seconds === 21 && setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
    gameDiff === "medium" && seconds === 16 && setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
    gameDiff === "hard" && seconds === 13 && setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
  }, [seconds])


  indexCounter > 0 && indexCounter <= 11 && setDiff("easy")

  indexCounter >= 11 && indexCounter <= 21 && setDiff("medium")

  indexCounter >= 22 && indexCounter <= 33 && setDiff("hard")


  const ct = (e) => {
    !selected &&
      setCat(e.target.value)
    setSeconds(0)
  };



  // const df = (e) => {

  //   setDiff(e.target.value)
  //   !selected &&
  //     setSeconds(0)
  // };


  const pop = (e) => {
    e.pop()
    setHints((prev) => (prev - 1))
  }

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <div>
      <Nav />
      <Counter />
      <Hints />

      <div className="qa--section">

        <header className="App-header">
          {<button className="play-btn" onClick={(nextHandler)}>next</button>}
          {<div className="questions--section">

            Q{indexCounter + 1} . {questionArray[indexCounter]}
          </div>}

          <div className="answers--section">
            {answers.sort().map((el, index) => (
              <div key={index} className="align-items">
                <button
                  value={el}
                  className={`singleOption  ${selected && handleSelect(el)}`}
                  key={el}
                  onClick={(() => handleCheck(el))
                  }
                  disabled={selected}
                >
                  {index + 1 + "." + el}
                </button>
              </div>
            ))}

            <Correct/>
            <p>Your streak : {streak}</p>
          </div>
          {/* {!selected ?
            <select onChange={(e) => ct(e)} >

              <option onChange={() => ct(cat)} value={cat}>
                change category
              </option>

              {categories.map(e => e !== firstCat && <option onChange={(e) => ct(e)
              }
                key={e}
                value={e}>
                {e}
              </option>)}

            </select> : !selected && score !== 0 && setCat(firstCat)} */}

          <p className="cat2">Category : {results[indexCounter].category}</p>
          <p>{diff}</p>
          {!selected && (hints === 1 || hints >= 2) && wrongAnswers[indexCounter].length >= 2 && (
            <button
              className="Counter"
              onClick={() =>
                pop(wrongAnswers[indexCounter])}>
              {hints >= 2 ? "DoubleClick for 50/50 CHANCE" : hints === 1 && "useHint"}
            </button>
          )}

          {gameOver === false && <QuestionTimer />}
        </header>
      </div>
    </div>
  );
};

export default QuestionBody;
