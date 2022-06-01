import Counter from "../question/Counter";
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../../context/MyContext";
import Hints from "./Hints";
import "../../../styling/questions.css";
import HighScore from "./HighScore";

const Rewards = () => {
  const context = useContext(MyContext);
  const {
    hints,
    setHints,
    score,
    highScore,
    setHighScore,
    name,
    setName,
    isProfileSaved,
    setIsProfileSaved,
    setLoginMsg,
  } = context;

  return (
    <div className="rewards--section">
      <Counter />
      <Hints />
      <HighScore />
    </div>
  );
};

export default Rewards;
