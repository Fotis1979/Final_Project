import React from "react";
import MyContext from "../../../context/MyContext";
import QuestionTimer from "./QuestionTimer";
import { useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import arrayRandomize from "../../../hooks/arrayRandomize";
import Rewards from "../rewards/Rewards";
import Nav from "../../pages/Nav";
import Correct from "../rewards/Correct";
import Counter from "./Counter";
import Hints from "../rewards/Hints";
import "../../../App.css";
import Popup from "../../Popup/Popup";
import ErrorMessage from "../../errorMessage/ErrorMessage";
import Diamonds from "../rewards/Diamonds";

const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    answerPopup,
    setAnswerPopup,
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
    error,
    setError,
    categories,
    setCategories,
  } = context;

  console.log(diff);

  useEffect(() => {
    console.log(categories);
    // it display question from category and change it again, fetch again , display question again.

    indexCounter >= 0 && indexCounter <= 5 && setCat(categories[indexCounter]);
    indexCounter >= 6 &&
      indexCounter <= 11 &&
      setCat(categories[indexCounter - 6]);
    indexCounter >= 12 &&
      indexCounter <= 18 &&
      setCat(categories[indexCounter - 12]);

    console.log(rightAnswer[indexCounter]);
  }, [indexCounter, categories]);

  const nav = useNavigate();

  if (indexCounter === number - 1 + 1) {
    console.log("last QUESTion");
    setGameOver(true);
    setStoredScore(score);
    nav("/game_over");
  }

  // storedScore && console.log(storedScore);

  const handleSelect = (i) => {
    setSeconds(0);
    setClicked(true);
    if (selected === i && selected === rightAnswer[indexCounter])
      return "select";
    else if (selected === i && selected !== rightAnswer[indexCounter])
      return "wrong";
    else if (i === rightAnswer[indexCounter]) return "select";
  };

  useEffect(
    (i) => {
      (selected === wrongAnswers[indexCounter][0] ||
        selected === wrongAnswers[indexCounter][1] ||
        selected === wrongAnswers[indexCounter][2]) &&
        setStreak(0);
    },
    [selected]
  );

  const handleCheck = (i) => {
    setSelected(i);
    setAnswerPopup(true);
    if (i === rightAnswer[indexCounter]) setScore(score + 10);
    setError(false);

    if (i === rightAnswer[indexCounter] && diff === "easy") {
      setScore(score + 6);
      setError(false);
    }
    if (i === rightAnswer[indexCounter] && diff === "medium") {
      setScore(score + 9);
      setError(false);
    }
    if (i === rightAnswer[indexCounter] && diff === "hard") {
      setScore(score + 12);
      setError(false);
    }
    if (
      i !== rightAnswer[indexCounter] &&
      diff === "hard" &&
      score !== 0 &&
      score >= 2
    ) {
      setScore(score - 2);
      score < 2 && setScore(0);
      setError(false);
    }
    if (
      i !== rightAnswer[indexCounter] &&
      diff === "medium" &&
      score !== 0 &&
      score >= 3
    ) {
      setScore(score - 2);
      setError(false);
    }
    if (
      i !== rightAnswer[indexCounter] &&
      diff === "easy" &&
      score !== 0 &&
      score >= 4
    ) {
      setScore(score - 3);
      setError(false);
    }
  };

  const nextHandler = () => {
    // !selected && setClicked(false)
    setSeconds(0);
    // console.log("first");
    if (selected) {
      setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
      setSelected();
    } else setError(true);
  };

  const answers = [];
  answers.push(rightAnswer[indexCounter]);
  wrongAnswers[indexCounter].map((el) => answers.push(el));

  // const categories = [];
  // categories.push(
  //   "arts",
  //   "film",
  //   "food",
  //   "general",
  //   "geography",
  //   "history",
  //   "music",
  //   "science",
  //   "society",
  //   "sport"
  // );

  useEffect(() => {
    setCat(arrayRandomize(categories).slice(4));
  }, []);

  useEffect(() => {
    indexCounter === indexCounter + 1 &&
      setCat(categories[Math.floor(Math.random())]);
    console.log(cat);
  }, []);

  useEffect(() => {
    console.log(rightAnswer[indexCounter]);
  }, [indexCounter]);

  // useEffect(() => {
  //   gameDiff === "easy" &&
  //     seconds === 21 &&
  //     setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
  //   gameDiff === "medium" &&
  //     seconds === 16 &&
  //     setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
  //   gameDiff === "hard" &&
  //     seconds === 13 &&
  //     setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
  // }, [seconds]);

  indexCounter > 0 && indexCounter <= 11 && setDiff("easy");

  indexCounter >= 11 && indexCounter <= 21 && setDiff("medium");

  indexCounter >= 22 && indexCounter <= 33 && setDiff("hard");

  const ct = (e) => {
    !selected && setCat(e.target.value);
    setSeconds(0);
  };

  const pop = (e) => {
    e.pop();
    setHints((prev) => prev - 1);
  };

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <div>
      <Nav />
      <Rewards />
      <Diamonds />

      {error && <ErrorMessage>Please select an option first</ErrorMessage>}
      <div className="qa--section">
        {
          <div className="questions--section">
            Q{indexCounter + 1} . {questionArray[indexCounter]}
          </div>
        }
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

          <Correct />
          <p>Your streak : {streak}</p>
        </div>
        <p className="cat2">Category : {results[indexCounter].category}</p>
        <p>{diff}</p>
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
        {
          <button className="play-btn" onClick={nextHandler}>
            next
          </button>
        }
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
        {gameDiff === "easy" && seconds < 21 ? (
          <QuestionTimer />
        ) : gameDiff === "medium" && seconds < 16 ? (
          <QuestionTimer />
        ) : gameDiff === "hard" && seconds < 13 ? (
          <QuestionTimer />
        ) : (
          <p>"Time Up !! Click NEXT button"</p>
        )}
      </div>
    </div>
  );
};

export default QuestionBody;
