import React from "react";
import MyContext from "../../../context/MyContext";
import QuestionTimer from "./QuestionTimer";
import { useContext, useEffect } from "react";
import "../../../styling/questions.scss";
import Rewards from "../rewards/Rewards";
import Nav from "../../pages/Nav";
import Correct from "../rewards/Correct";
import Diamonds from "../rewards/Diamonds";
import GameOver from "../../pages/GameOver";
import { useNavigate } from "react-router";
import Popup from "../../Popup/Popup";
import useSound from "use-sound";
import correctanswer from "../../../assets/sounds/correctanswer.mp3";
import wronganswear from "../../../assets/sounds/wronganswear.mp3";

const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    trigger,
    setTrigger,

    diamondPoints,
    clicked,
    next,
    setNext,
    timerTrigger,
    setTimerTrigger,
    categories,
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
    score,
    setScore,

    setImg,

    indexCounter,
    setIndexCounter,
    selected,
    setSelected,

    img,
    img2,
    gameOver,
    gameDiff,
    setError,
    setTimeUp,
    timeUp,
    messageStreak,
    messageD,
    message,
    showStreak,
    setShowStreak,
    setClicked,

    setGameOver,
    setMessageStreak,
    diamonds,
    questionCount,
    setQuestionCount,
    setSettings,

    highScoreResult,
    setHighScoreResult,
    highScore,
  } = context;

  //setting highScore
  useEffect(() => {
    let scoreSum = Number(score) + Number(highScore);
    if (scoreSum > highScoreResult) {
      setHighScoreResult(scoreSum);
      console.log("scoresum", scoreSum);
    }
  }, [score, highScore]);
  useEffect(() => {
    const url = "http://localhost:8080/profile/save";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ hints, highScoreResult, diamonds }),
    };

    fetch(url, options)
      .then((response) => response.text())
      .then((result) => {
        // setHints(result.data.hints);
        // setHighScoreResult(result.data.highScoreResult);
      });
  }, [hints, highScoreResult, score, diamonds]);

  const [playR] = useSound(correctanswer);
  const [playW] = useSound(wronganswear);

  useEffect(() => {
    if (selected === rightAnswer[indexCounter]) {
      playR();
      console.log("rightAnswer");
    } else if (
      selected === wrongAnswers[indexCounter][0] ||
      selected === wrongAnswers[indexCounter][1] ||
      selected === wrongAnswers[indexCounter][2]
    ) {
      playW();
      console.log("wrongAnswers");
    }
  }, [selected]);

  useEffect(() => {
    setSettings(false);
  }, [setSettings]);

  useEffect(() => {
    gameOver === true && setMessageStreak("");
  }, [indexCounter, setGameOver, gameOver, score, setImg, setMessageStreak]);

  useEffect(() => {
    next && selected && setQuestionCount((prev) => prev + 1);
  }, [next, setQuestionCount]);

  useEffect(() => {
    console.log("QUESTIONCOUNT IS", questionCount);
  }, [indexCounter, questionCount]);

  questionCount === 18 &&
    selected &&
    setTimeout(() => {
      setGameOver(true);
    }, 6000);

  useEffect(() => {
    questionCount === 0 && setGameOver(false);
  }, [setGameOver, indexCounter]);

  useEffect(() => {
    selected && setTimerTrigger(false);
  }, [selected, setTimerTrigger, seconds]);

  useEffect(() => {
    !selected &&
      setTimeout(() => {
        setTimerTrigger(true);
      }, 4500);
  }, [selected]);

  useEffect(() => {
    setTimeout(() => {
      timerTrigger === true && setSeconds((prev) => prev + 1);
    }, 1000);
  }, [timerTrigger, seconds]);

  const nextHandler = () => {
    setStoredScore(score);
    setClicked(false);
    if (selected) {
      setSelected();
    } else setError("Please select an option first");
    setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
    setSeconds(0);
    setTimeUp(false);
  };

  useEffect(() => {
    console.log(categories);
    indexCounter >= 0 && indexCounter <= 5 && setCat(categories[indexCounter]);
    indexCounter >= 6 && indexCounter <= 11 && setIndexCounter(0);
    indexCounter >= 12 && indexCounter <= 18 && setIndexCounter(0);
  }, [indexCounter, categories, setCat]);

  const handleSelect = (i) => {
    setSeconds(0);

    if (selected === i && selected === rightAnswer[indexCounter])
      return "select";
    else if (selected === i && selected !== rightAnswer[indexCounter])
      return "wrong";
    else if (i === rightAnswer[indexCounter]) return "select";
  };

  useEffect(() => {
    console.log("CLICKED IS :", clicked);
  }, [clicked]);

  useEffect(() => {
    img && score === 0 && setNext(true);
  }, [img, setNext, setTimerTrigger, score, indexCounter]);

  useEffect(() => {
    console.log(rightAnswer[indexCounter]);
  }, [rightAnswer, indexCounter]);

  useEffect(() => {
    (selected === wrongAnswers[indexCounter][0] ||
      selected === wrongAnswers[indexCounter][1] ||
      selected === wrongAnswers[indexCounter][2]) &&
      setStreak(0);
  }, [selected]);

  const handleCheck = (i) => {
    setSelected(i);

    if (i === rightAnswer[indexCounter] && diff === "easy") {
      setTimeout(() => {
        setScore(score + 10);
      }, 2800);
      setTimeout(() => {
        setNext(true);
      }, 4000);

      setNext(false);
      setError(false);
    }
    if (i === rightAnswer[indexCounter] && diff === "medium") {
      setTimeout(() => {
        setScore(score + 15);
      }, 2800);
      setTimeout(() => {
        setNext(true);
      }, 4000);

      setNext(false);
      setError(false);
    }
    if (i === rightAnswer[indexCounter] && diff === "hard") {
      setTimeout(() => {
        setScore(score + 20);
      }, 2800);
      setTimeout(() => {
        setNext(true);
      }, 4000);

      setNext(false);
      setError(false);
    }
    if (
      i !== rightAnswer[indexCounter] &&
      diff === "hard" &&
      score !== 0 &&
      score >= 5
    ) {
      setTimeout(() => {
        setScore(score - 5);
      }, 2800) &&
        setTimeout(() => {
          score < 5 && setScore(0);
        }, 2800);
      setTimeout(() => {
        setNext(true);
      }, 4000);

      setNext(false);
      setError(false);
    }
    if (
      i !== rightAnswer[indexCounter] &&
      (diff === "hard" || diff === "medium") &&
      score <= 4
    ) {
      setTimeout(() => {
        setScore(0);
      }, 2800);
      setTimeout(() => {
        setNext(true);
      }, 4000);

      setNext(false);
      setError(false);
    }
    if (
      i !== rightAnswer[indexCounter] &&
      diff === "medium" &&
      score !== 0 &&
      score >= 5
    ) {
      setTimeout(() => {
        setScore(score - 5);
      }, 2800) &&
        score < 5 &&
        setTimeout(() => {
          setScore(0);
        }, 2800);
      setTimeout(() => {
        setNext(true);
      }, 4000);

      setNext(false);
      setError(false);
    }
    if (
      i !== rightAnswer[indexCounter] &&
      diff === "easy" &&
      score !== 0 &&
      score >= 7
    ) {
      setTimeout(() => {
        setScore(score - 7);
      }, 2800);
      setTimeout(() => {
        setNext(true);
      }, 4000);

      setNext(false);
      setError(false);
    }
    if (
      i !== rightAnswer[indexCounter] &&
      diff === "easy" &&
      score !== 0 &&
      score < 7
    ) {
      setTimeout(() => {
        setScore(0);
      }, 2800);
      setTimeout(() => {
        setNext(true);
      }, 4000);

      setNext(false);
      setError(false);
    }
  };

  useEffect(() => {
    ((gameDiff === "easy" && seconds > 20) ||
      (gameDiff === "medium" && seconds > 15) ||
      (gameDiff === "hard" && seconds > 12)) &&
      setTimeUp(true);
    timeUp === true && setNext(true);
  }, [gameDiff, seconds, setTimeUp, timeUp, setNext]);

  const answers = [];
  answers.push(rightAnswer[indexCounter]);
  wrongAnswers[indexCounter].map((el) => answers.push(el));

  questionCount === 6 && setDiff("medium");
  questionCount === 12 && setDiff("hard");

  const pop = (e) => {
    setClicked(true);
    e.pop();
    setHints((prev) => prev - 1);
  };

  const tr = () => {
    setTrigger(true);
  };
  indexCounter === 0 && setTrigger(false);

  const nav = useNavigate();

  if (loading) return <p>loading ..</p>;
  if (eror) return <p>{eror}</p>;

  return (
    <>
      <Nav />
      <div className="qa--section">
        {gameOver === true && <GameOver />}

        {gameOver === false && diff === "easy" && (
          <p className="round">1st RoUnD !</p>
        )}
        {gameOver === false && diff === "medium" && (
          <p className="round">2nd RoUnD !</p>
        )}
        {gameOver === false && diff === "hard" && (
          <p className="round">Diamonds RoUnD !</p>
        )}
        {gameOver === false && !img && !timeUp && (
          <p className="mode">{diff}</p>
        )}

        {gameOver === false && questionCount >= 12 && !img && (
          <p style={{ color: "red", fontSize: "25px", marginLeft: "20px" }}>
            DiamondPointS {diamondPoints}
          </p>
        )}
        <div className="round--info">
          {gameOver === false && !img && !timeUp && (
            <p className="cat">Category : {cat}</p>
          )}

          {gameOver === false && !img
            ? setShowStreak(`STREAK is : ${streak}`)
            : setShowStreak()}
          {!img && <p className="cat"> {showStreak}</p>}
        </div>

        {next === true && img && streak !== 0 && streak >= 2 && (
          <p className="cat3">{messageStreak}</p>
        )}
        {!messageStreak && !showStreak && gameOver === false && (
          <p className="cat2">
            {selected !== rightAnswer[indexCounter] ? messageD : message}
          </p>
        )}
        {gameOver === false && <Rewards />}

        <button className="rewards--btn" onClick={tr}>
          LEAVE GAME
        </button>

        <Popup trigger={trigger} setTrigger={setTrigger} />

        <div>
          {gameOver === false && timeUp === true && (
            <p className="cat">TIME UP !!! CLICK NEXT</p>
          )}

          {!img && !timeUp && gameOver === false && (
            <div className="questions--section">
              Q{indexCounter + 1} .{" "}
              <p className="quest">{questionArray[indexCounter]}</p>
            </div>
          )}

          {/* ********** Remove style to show everything !! ********** */}
          {gameOver === false && (
            <div
              //  style={img && { visibility: "hidden" }}

              className="answers--section"
            >
              {answers.sort().map(
                (el, index) =>
                  gameOver === false && (
                    <div key={index} className="answers--answerdiv">
                      <button
                        value={el}
                        className={
                          clicked === true
                            ? `singleOpt  ${selected && handleSelect(el)}`
                            : `singleOption  ${selected && handleSelect(el)}`
                        }
                        key={el}
                        onClick={() => handleCheck(el)}
                        disabled={selected}
                        // ********** Remove style to show everything !! **********
                        style={img && { visibility: "hidden" }}
                      >
                        {index + 1 + "." + el}
                      </button>
                    </div>
                  )
              )}

              {(img || timeUp || img2) &&
                next === true &&
                questionCount !== 18 &&
                (messageStreak || (message && streak < 3)) && (
                  <button className="next--btn" onClick={nextHandler}>
                    NEXT
                  </button>
                )}
            </div>
          )}

          {
            <div className="popUp">
              {" "}
              <Correct />
            </div>
          }

          {!selected &&
            (hints === 1 || hints >= 2) &&
            wrongAnswers[indexCounter].length >= 2 && (
              <button
                className="rewards--btn hints--btn"
                onClick={() => pop(wrongAnswers[indexCounter])}
              >
                {hints >= 2
                  ? "DoubleClick for 50/50 CHANCE"
                  : hints === 1 && "useHint"}
              </button>
            )}
          <Diamonds />

          {timeUp === false &&
            !selected &&
            ((gameDiff === "easy" && seconds < 21) ||
              (gameDiff === "medium" && seconds < 16) ||
              (gameDiff === "hard" && seconds < 13)) && <QuestionTimer />}

          {timeUp === true && setSelected(wrongAnswers[0])}
        </div>
      </div>
    </>
  );
};

export default QuestionBody;
