import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import MyContext from "../../../context/MyContext";
import Nav from "../../pages/Nav";
import Hints from "../rewards/Hints";
import ScoreCounter from "./ScoreCounter";
import Rewards from "../rewards/Rewards";
import arrayRandomize from "../../../hooks/arrayRandomize";
import "../../../styling/questions.scss";
import Popup from "../../Popup/Popup";
import ErrorMessage from "../../errorMessage/ErrorMessage";

const QuestionBody = () => {
  const context = useContext(MyContext);
  const {
    loading,
    results,
    error,
    cat,
    setCat,
    setStoredScore,
    setError,
    number,
    eror,
    hints,
    highScore,
    setHighScore,
    setHints,
    questionArray,
    wrongAnswers,
    rightAnswer,
    score,
    setScore,
    answerPopup,
    setAnswerPopup,
    loginMsg,
    setLoginMsg,
    setHighScoreResult,
    highScoreResult,
  } = context;

  const [selected, setSelected] = useState();
  const [indexCounter, setIndexCounter] = useState(0);
  console.log(highScoreResult);
  console.log(highScore);
  useEffect(() => {
    const url = "http://localhost:8080/profile/save";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ hints, highScoreResult }),
    };

    fetch(url, options)
      .then((response) => response.text())
      .then((result) => {
        // setHints(result.data.hints);
        // setHighScoreResult(result.data.highScoreResult);
      });
  }, [hints, highScoreResult, score]);

  //setting highScore
  useEffect(() => {
    let scoreSum = Number(score) + Number(highScore);
    if (scoreSum > highScoreResult) {
      setHighScoreResult(scoreSum);
      console.log("scoresum", scoreSum);
    }
  }, [score, highScore]);

  useEffect(() => {
    for (let i = 50; i <= 55; i++)
      score !== 0 && score % i === 0 && setHints((prev) => prev + 1);
  }, [score, setHints]);

  useEffect(() => {
    console.log(rightAnswer[indexCounter]);
  }, [indexCounter]);

  const nav = useNavigate();

  indexCounter === number - 1 + 1 && setStoredScore(score);
  indexCounter === number - 1 + 1 && nav("/game_over");

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
    if (selected) {
      setSelected();
    } else setError("Please select an option first");
    setIndexCounter((prevIndexCounter) => prevIndexCounter + 1);
  };

  const answers = [];

  answers.push(rightAnswer[indexCounter]);
  wrongAnswers[indexCounter].map((el) => answers.push(el));

  const categories = [];
  categories.push(
    "arts",
    "film",
    "food",
    "general knowledge",
    "geography",
    "history",
    "music",
    "science",
    "society",
    "sport"
  );

  const x = (e) => {
    setCat(e.target.value);
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

      {/* {error && <ErrorMessage>Please select an option first</ErrorMessage>} */}

      {(hints === 1 || hints === 2) && (
        <button
          className="rewards--btn"
          onClick={() =>
            wrongAnswers[indexCounter + 1].length > 1 &&
            wrongAnswers[indexCounter + 1].pop() &&
            setHints((prev) => prev - 1)
          }
        >
          {hints === 2 ? "DoubleClick for 50/50 CHANCHE" : "useHint"}
        </button>
      )}

      <div className="qa--section">
        <Rewards />
        {/* <header className="App-header"> */}
        <div className="questions--section ">
          <p className="cat">Category : {results[indexCounter].category}</p>Q
          {indexCounter + 1} . {questionArray[indexCounter]}
        </div>
        <div className="answers--section ">
          {answers.sort().map((el, index) => (
            <div key={index} className="answers--answerdiv">
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
        </div>
        {/* <p className="cat">Category : {results[indexCounter].category}</p> */}

        {/* >>>>>>   repeated need to be deleted    <<<<<<<<*/}

        {/* {!selected &&
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
          )}*/}
        {/* <QuestionTimer /> */}

        <button className="next--btn" onClick={nextHandler}>
          next
        </button>
        {/* {selected === rightAnswer[indexCounter] && (
          <Popup trigger={answerPopup} setTrigger={setAnswerPopup}>
            <p>Correct answer</p>
          </Popup>
        )}
        {selected !== rightAnswer[indexCounter] && (
          <Popup trigger={answerPopup} setTrigger={setAnswerPopup}>
            <p>wrong answer</p>
          </Popup>
        )} */}
      </div>
    </div>
  );
};

export default QuestionBody;
