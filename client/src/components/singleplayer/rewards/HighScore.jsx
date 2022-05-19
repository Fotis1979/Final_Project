import React from "react";
import { useContext, useState, useEffect } from "react";
import MyContext from "../../../context/MyContext";
const HighScore = () => {
  const context = useContext(MyContext);

  const {
    highScore,
    setHighScore,
    highScoreResult,
    score,
    setScore,
    setHighScoreResult,
  } = context;

  /// set highscore to localstorage
  useEffect(() => {
    const scoreSum = Number(score) + Number(highScore);
    setHighScoreResult(scoreSum);
    localStorage.setItem("highScore", scoreSum);
  }, [score, highScore]);

  return (
    <div className="rewards--btn">
      <label>High Score :</label>
      <span>{highScoreResult}</span>
    </div>
  );
};

export default HighScore;
