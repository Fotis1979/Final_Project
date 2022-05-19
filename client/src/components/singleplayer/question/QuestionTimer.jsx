import { useEffect } from "react";
import { useState, useContext } from "react";
import MyContext from "../../../context/MyContext";

const QuestionTimer = () => {
  const context = useContext(MyContext);
  const { messageB, setMessageB, seconds, setSeconds, gameOver, gameDiff } =
    context;

  useEffect(() => {
    function incrementSeconds() {
      gameOver === false && setSeconds((prev) => prev + 1);
    }
    setInterval(incrementSeconds, 1000);

    gameOver === true && clearInterval(incrementSeconds);
  }, [gameOver]);

  useEffect(() => {
    // seconds === 16 && setNewQuestion(true);
    seconds === 16 && setSeconds(0);
    // message && setSeconds(0);
  }, [seconds]);

  useEffect(() => {
    gameDiff === "easy" && seconds === 21 && setSeconds(0);
    gameDiff === "medium" && seconds === 16 && setSeconds(0);
    gameDiff === "hard" && seconds === 13 && setSeconds(0);
  }, [seconds]);

  if (gameDiff === "easy") {
    setMessageB("U have 20 secs for each Question !");
  } else if (gameDiff === "medium") {
    setMessageB("U have 15 secs for each Question !");
  } else {
    setMessageB("U have 12 secs for each Question !");
  }

  return (
    <aside className="question-timer">
      <span className="sec">{seconds}</span>

      <span style={{ fontSize: "20px", paddingTop: "20px" }}>{messageB}</span>
    </aside>
  );
};

export default QuestionTimer;
