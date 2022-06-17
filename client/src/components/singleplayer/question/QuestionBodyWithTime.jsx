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
import Popup from "../../Popup/Popup";
import useSound from "use-sound";
import correctanswer from "../../../assets/sounds/correctanswer.mp3";
import wronganswear from "../../../assets/sounds/wronganswear.mp3";
import green from '../../../assets/images/green.png'
import red from '../../../assets/images/red.png'
import diamondArt from '../../../assets/images/diamondArt.png'

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
    eror,
    settings,
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
    circleArts, setCircleArts,
    circleArts2, setCircleArts2,
    circleGeo, setCircleGeo,
    circleGeo2, setCircleGeo2,
    circleFood, setCircleFood,
    circleFood2, setCircleFood2,
    circleGen, setCircleGen,
    circleGen2, setCircleGen2,
    circleFilm, setCircleFilm,
    circleFilm2, setCircleFilm2,
    circleSport, setCircleSport,
    circleSport2, setCircleSport2,
    circleSoc, setCircleSoc,
    circleSoc2, setCircleSoc2,
    circleSci, setCircleSci,
    circleSci2, setCircleSci2,
    circleMus, setCircleMus,
    circleMus2, setCircleMus2,
    circleHist, setCircleHist,
    circleHist2, setCircleHist2,
    diamondFilm,
    diamondGeo,
    diamondGen,
    diamondSoc,
    diamondSci,
    diamondSport,
    diamondFood,
    diamondHist,
    diamondArts,
    diamondMus,

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

  // *** SOUND *** 

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

  // **********

  useEffect(() => {
    setSettings(false);
    console.log(settings);
  }, [setSettings]);

  useEffect(() => {
    gameOver === true && setMessageStreak("");
  }, [indexCounter, setGameOver, gameOver, score, setImg, setMessageStreak]);

  useEffect(() => {
    next && selected && setQuestionCount((prev) => prev + 1);
  }, [next, setQuestionCount, selected]);

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


    questionCount === 0 &&
      setCircleGeo(false)
    questionCount === 0 &&
      setCircleGeo2(false)
    questionCount === 0 &&
      setCircleFood(false)
    questionCount === 0 &&
      setCircleFood2(false)
    questionCount === 0 &&
      setCircleGen(false)
    questionCount === 0 &&
      setCircleGen2(false)
    questionCount === 0 &&
      setCircleFilm(false)
    questionCount === 0 &&
      setCircleFilm2(false)
    questionCount === 0 &&
      setCircleSport(false)
    questionCount === 0 &&
      setCircleSport2(false)
    questionCount === 0 &&
      setCircleSoc(false)
    questionCount === 0 &&
      setCircleSoc2(false)
    questionCount === 0 &&
      setCircleSci(false)
    questionCount === 0 &&
      setCircleSci2(false)
    questionCount === 0 &&
      setCircleMus(false)
    questionCount === 0 &&
      setCircleMus2(false)
    questionCount === 0 &&
      setCircleHist(false)
    questionCount === 0 &&
      setCircleHist2(false)
  }, [questionCount, setCircleArts, setCircleArts2, setCircleFilm, setCircleFilm2, setCircleFood, setCircleFood2, setCircleGen, setCircleGen2, setCircleHist, setCircleHist2, setCircleMus, setCircleMus2, setCircleSci, setCircleSci2, setCircleSoc, setCircleSoc2, setCircleSport, setCircleSport2, setCircleGeo2, setCircleGeo])


  useEffect(() => {
    questionCount === 0 &&
      setCircleArts(false)
    questionCount === 0 &&
      setCircleArts2(false)
  }, [questionCount, setCircleArts, setCircleArts2])

  useEffect(() => {
    console.log("circleArts IS.", circleArts);
  }, [indexCounter, circleArts])


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

        {!img && gameOver !== true && <button className="rewards--btn" onClick={tr}>
          LEAVE GAME
        </button>}
        
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

          <div > 
             {!img && gameOver === false && timeUp === false && !selected && <div className="cat5"><h1 className="cat7">Turn all circles of EACH CATEGORY to GREEN FOR a DIAMOND</h1></div>}
        
            {!selected && gameOver !== true &&  categories.splice(6) && categories.map(e => (
              <div className="cat4">
                
                <ul >
                  <li value={e} className={cat === e ? "cat5" : "cat6"}>
                    {e}
                    {circleGeo === true && e === "geography" ? (<img className="diamondArt2" src={green} alt="" />) : e === "geography" && <img className="diamondArt2" src={red} alt="" />}
                    {circleGeo2 === true && e === "geography" ? (<img className="diamondArt3" src={green} alt="" />) : e === "geography" && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondGeo.easy === true && diamondGeo.medium === true && diamondGeo.hard === true && e === "geography") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> :e === "geography" && diamondGeo.hard === true  ? <img className="diamondArt2" src={green} alt="" /> : e === "geography" && <img className="diamondArt2" src={red} alt="" />}

                    {circleArts === true && e === "arts" ? (<img className="diamondArt2" src={green} alt="" />) : e === "arts" && <img className="diamondArt2" src={red} alt="" />}
                    {circleArts2 === true && e === "arts" ? (<img className="diamondArt3" src={green} alt="" />) : e === "arts" && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondArts.easy === true && diamondArts.medium === true && diamondArts.hard === true && e === "arts") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> :e === "arts" && diamondArts.hard === true  ? <img className="diamondArt2" src={green} alt="" /> : e === "arts" && <img className="diamondArt2" src={red} alt="" />}

                    {circleGen === true && e === "general" ? <img className="diamondArt2" src={green} alt="" /> : e === "general" && <img className="diamondArt2" src={red} alt="" />}
                    {circleGen2 === true && e === "general" ? <img className="diamondArt3" src={green} alt="" /> : e === "general" && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondGen.easy === true && diamondGen.medium === true && diamondGen.hard === true && e === "general") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> :e === "general" && diamondGen.hard === true  ? <img className="diamondArt2" src={green} alt="" /> : e === "general" && <img className="diamondArt2" src={red} alt="" />}

                    {circleFood === true && e === "food" ? (<img className="diamondArt2" src={green} alt="" />) : e === "food" && <img className="diamondArt2" src={red} alt="" />}
                    {circleFood2 === true && e === "food" ? (<img className="diamondArt3" src={green} alt="" />) : e === "food" && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondFood.easy === true && diamondFood.medium === true && diamondFood.hard === true && e === "food") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> :e === "food" && diamondFood.hard === true  ? <img className="diamondArt2" src={green} alt="" /> : e === "food" && <img className="diamondArt2" src={red} alt="" />}

                    {circleFilm === true && e === "film" ? (<img className="diamondArt2" src={green} alt="" />) : e === "film" && <img className="diamondArt2" src={red} alt="" />}
                    {circleFilm2 === true && e === "film" ? (<img className="diamondArt3" src={green} alt="" />) : e === "film" && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondFilm.easy === true && diamondFilm.medium === true && diamondFilm.hard === true && e === "film") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> :e === "film" && diamondFilm.hard === true  ? <img className="diamondArt2" src={green} alt="" /> : e === "film" && <img className="diamondArt2" src={red} alt="" />}

                    {circleSci === true && e === "science" ? (<img className="diamondArt2" src={green} alt="" />) : e === "science" && <img className="diamondArt2" src={red} alt="" />}
                    {circleSci2 === true && e === "science" ? (<img className="diamondArt3" src={green} alt="" />) : e === "science" && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondSci.easy === true && diamondSci.medium === true && diamondSci.hard === true && e === "science") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> :e === "science" && diamondSci.hard === true  ? <img className="diamondArt2" src={green} alt="" /> : e === "science" && <img className="diamondArt2" src={red} alt="" />}

                    {circleSoc === true && e === "society" ? (<img className="diamondArt2" src={green} alt="" />) : e === "society" && <img className="diamondArt2" src={red} alt="" />}
                    {circleSoc2 === true && e === "society" ? (<img className="diamondArt3" src={green} alt="" />) : e === "society" && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondSoc.easy === true && diamondSoc.medium === true && diamondSoc.hard === true && e === "society") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> : e === "society" && <img className="diamondArt2" src={red} alt="" />}

                    {circleHist === true && e === "history" ? (<img className="diamondArt2" src={green} alt="" />) : e === "history" && <img className="diamondArt2" src={red} alt="" />}
                    {circleHist2 === true && e === "history" ? (<img className="diamondArt3" src={green} alt="" />) : e === "history" && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondHist.easy === true && diamondHist.medium === true && diamondHist.hard === true && e === "history") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> :e === "history" && diamondHist.hard === true  ? <img className="diamondArt2" src={green} alt="" /> : e === "history" && <img className="diamondArt2" src={red} alt="" />}

                    {circleSport === true && e === "sport" ? (<img className="diamondArt2" src={green} alt="" />) : e === "sport" && <img className="diamondArt2" src={red} alt="" />}
                    {circleSport2 === true && e === "sport" ? (<img className="diamondArt3" src={green} alt="" />) : e === "sport" && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondSport.easy === true && diamondSport.medium === true && diamondSport.hard === true && e === "sport") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> :e === "sport" && diamondSport.hard === true  ? <img className="diamondArt2" src={green} alt="" /> : e === "sport" && <img className="diamondArt2" src={red} alt="" />}

                    {circleMus === true && e === "music" ? (<img className="diamondArt2" src={green} alt="" />) : e === "music" && diamondMus !== { easy: true, medium: true, hard: true } && <img className="diamondArt2" src={red} alt="" />}
                    {circleMus2 === true && e === "music" ? (<img className="diamondArt3" src={green} alt="" />) : e === "music" && diamondMus !== { easy: true, medium: true, hard: true } && <img className="diamondArt2" src={red} alt="" />}
                    {(diamondMus.easy === true && diamondMus.medium === true && diamondMus.hard === true && e === "music") ? <img className="diamondArt2" src={diamondArt} alt="diamond" /> :e === "music" && diamondMus.hard === true  ? <img className="diamondArt2" src={green} alt="" /> : e === "music" && <img className="diamondArt2" src={red} alt="" />}
                    {/* <li className="l">{circleGeo === true && e === "geography" ? <img className="diamondArt2" src={diamondArt} alt="" /> : <img className="diamondArt2" src={red} alt="" />}

                    </li>     */}
                  </li>
                </ul>
              </div>

            ))
            }
          </div>


          {<div className="popUp">
            <Correct />
          </div>
          }

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
