import React from "react";
import { useContext } from "react";
import MyContext from "../../../context/MyContext";
const Hints = () => {
  const context = useContext(MyContext);
  const {
    color,

    score,
    setScore,
    newQuestion,
    hints,
    setHints,
  } = context;

  return (
    <div className="counter-hints">
      <label>hints : </label>
      <span>{hints / 2}</span>
    </div>
  );
};

export default Hints;
