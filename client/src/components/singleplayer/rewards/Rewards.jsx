import Counter from "../question/Counter";
import { useContext, useState } from "react";
import Hints from "./Hints";
import "../../../styling/questions.css";
import HighScore from "./HighScore";

const Rewards = () => {
  return (
    <div className="rewards--section">
      <Counter />
      <Hints />
      <HighScore />
    </div>
  );
};

export default Rewards;
